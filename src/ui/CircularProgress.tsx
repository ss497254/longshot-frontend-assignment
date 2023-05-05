export const CircularProgress = ({
    size = 192,
    value = 0.35,
    strokeWidth = 8,
    className = "",
}) => {
    const radius = (size - strokeWidth) / 2;
    const viewBox = `0 0 ${size} ${size}`;
    const perimeter = radius * Math.PI * 2;
    const dashOffset = perimeter - perimeter * value;

    return (
        <div
            className={["relative", className].join(" ")}
            style={{ height: size, width: size }}
        >
            <div
                style={{
                    borderWidth: strokeWidth + 0.5,
                }}
                className="absolute inset-0 border border-gray-300 rounded-full"
            ></div>
            <svg
                className="absolute"
                width={size}
                height={size}
                viewBox={viewBox}
            >
                <circle
                    className="text-gray-300 circle-progress stroke-yellow-400"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={`${strokeWidth}px`}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    style={
                        {
                            strokeDasharray: perimeter,
                            "--dash-offset": dashOffset,
                            "--perimeter": perimeter,
                        } as any
                    }
                />
            </svg>
        </div>
    );
};
