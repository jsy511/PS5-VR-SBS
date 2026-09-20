const Stream = {
    left: null,
    right: null,

    setVideo(leftURL, rightURL) {
        this.left = leftURL;
        this.right = rightURL;

        const leftVideo = document.getElementById("leftEye");
        const rightVideo = document.getElementById("rightEye");

        if (leftVideo && leftURL) {
            leftVideo.src = leftURL;
        }

        if (rightVideo && rightURL) {
            rightVideo.src = rightURL;
        }

        setStatus("Two-eye video connected");
    }
};