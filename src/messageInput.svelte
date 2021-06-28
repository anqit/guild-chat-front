<script>
    import {selectedRoom, user} from "./store";

    const submitMessage = (message) => ({ roomId: selectedRoom, author: user, message })
</script>