window.scrollChatToBottom = function(id){
    var box = document.getElementById(id);
    if(box){
        box.scrollTop = box.scrollHeight;
    }
};

// wwwroot/chat.js

function initializeChatInput(inputId, chatBoxId) {
    var inputElement = document.getElementById(inputId);
    var chatBox = document.getElementById(chatBoxId);
    var maxHeight = 150; // Khai báo chiều cao tối đa ở đây

    if (inputElement) {
        // Xóa sự kiện cũ
        inputElement.oninput = null;

        inputElement.addEventListener("input", function() {
            // 1. Reset về auto để tính toán lại chiều cao thực tế
            this.style.height = "auto";
            this.style.overflowY = "hidden"; // Tạm ẩn scrollbar để tính cho chuẩn

            // 2. Lấy chiều cao thực tế của nội dung
            var newHeight = this.scrollHeight;

            // 3. Kiểm tra: Nếu cao hơn giới hạn 150px
            if (newHeight > maxHeight) {
                this.style.height = maxHeight + "px"; // Khóa chiều cao ở 150px
                this.style.overflowY = "auto";        // Bật thanh cuộn lên
            } else {
                this.style.height = newHeight + "px"; // Co giãn theo nội dung
                this.style.overflowY = "hidden";      // Ẩn thanh cuộn
            }

            // 4. Scroll khung chat xuống đáy (để không bị che)
            if (chatBox) {
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        });
    }
}

function resetTextArea(id) {
    var element = document.getElementById(id);
    if (element) {
        element.value = "";
        
        // Reset lại trạng thái ban đầu
        element.style.height = "auto"; 
        element.style.height = "38px"; // Chiều cao mặc định 1 dòng
        element.style.overflowY = "hidden"; // Ẩn scrollbar đi
    }
}

// Hàm scrollChatToBottom giữ nguyên...
function scrollChatToBottom(id) {
    var element = document.getElementById(id);
    if (element) {
        element.scrollTop = element.scrollHeight;
    }
}

