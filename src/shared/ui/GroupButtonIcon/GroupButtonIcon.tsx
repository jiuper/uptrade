import cnBind from "classnames/bind";

import { upLoadFile } from "../../lib/helper/upLoadFile";
import { useHookDispatch } from "../../lib/module/store/configStore";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { InputLoaderFile } from "../InputLoaderFile/InputLoaderFile";
import { Title } from "../Title/Title";

import type { IGroupButtonIconType } from "./GroupButtonIcon.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const GroupButtonIcon = ({
    listIconsButton,
    handleAction,
    classPrefixIcon,
    classPrefix,
    classPrefixUpLoader,
    classPrefixTitle,
    children,
    svgPath,
    id,
    priority = false,
}: IGroupButtonIconType) => {
    const dispatch = useHookDispatch();
    const handleDispatch = (file: File) => {
        upLoadFile(id, file, dispatch);
    };

    return listIconsButton.map((button, i) => (
        <ButtonIcon
            key={i}
            classPrefix={cx(classPrefix)}
            nameIcon={button.icon}
            classPrefixIcon={cx(classPrefixIcon, i === 1 && priority && "btn-checked")}
            handleAction={() => handleAction(i)}
            path={svgPath}
        >
            {button.title && <Title caption={button.title} classPrefix={classPrefixTitle} />}
            {i === 3 && <InputLoaderFile handleUpLoader={handleDispatch} classPrefix={classPrefixUpLoader} />}
            {children}
        </ButtonIcon>
    ));
};
