export const Progress = ({ progress }: { progress: number }) => {
    return (
        <svg
            width="70"
            height="70"
            id="Circle"
            viewBox="-22.125 -22.125 221.25 221.25"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                r="78.5"
                cx="88.5"
                cy="88.5"
                fill="transparent"
                stroke="#e0e0e0"
                strokeWidth="15"
                strokeDasharray="492.98px"
                strokeDashoffset="0"
            />
            <circle
                r="78.5"
                cx="88.5"
                cy="88.5"
                stroke={progress !== 0 ? "#10bc6c" : "#e0e0e0"}
                strokeWidth="16"
                strokeLinecap="round"
                strokeDashoffset={progress === 0 ? "492px" : `${492 - (492 / 100) * progress}px`}
                fill="transparent"
                strokeDasharray="492.98px"
            />
            <text
                x={progress === 100 ? "45px" : progress === 0 ? "67px" : `55px`}
                y="101px"
                fill="#78c4a1"
                fontSize="40px"
                fontWeight="bold"
                style={{ transform: "rotate(90deg) translate(0px, -173px)" }}
            >
                {progress}%
            </text>
        </svg>
    );
};
