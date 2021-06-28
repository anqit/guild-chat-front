<script>
    import {selectedRoom, user, socket} from "./store";

    const submitMessage = (message) => ({ roomId: selectedRoom, author: user, message })
</script>