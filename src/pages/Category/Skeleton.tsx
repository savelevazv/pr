import ContentLoader from "react-content-loader"

export const Skeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={200}
            height={19}
            viewBox="0 0 200 19"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"

        >
            <rect x="0" y="0" rx="7" ry="7" width="200" height="19" />
        </ContentLoader>

    )
}