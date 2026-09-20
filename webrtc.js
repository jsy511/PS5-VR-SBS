const LiveStream = {
    peer: null,

    async connect(signal) {
        if (!signal) {
            setStatus("No live stream signal");
            return;
        }

        setStatus("Connecting to live stream...");

        // WebRTC connection will be added here.
        // The PS5 video source will eventually provide
        // the live stream to this receiver.

        setStatus("Live receiver ready");
    },

    disconnect() {
        if (this.peer) {
            this.peer.close();
            this.peer = null;
        }

        setStatus("Disconnected");
    }
};