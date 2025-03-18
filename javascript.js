$(document).ready(function() {
    $("#toggle").click(function() {
        $("nav").slideToggle();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Lấy tất cả các thẻ <a> trong menu
    const menuLinks = document.querySelectorAll("#main-menu li a");

    menuLinks.forEach((link) => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Kiểm tra nếu người dùng click vào "JavaScript"
            if (this.textContent.trim() === "JavaScript") {
                const article = document.getElementById("article");
                article.innerHTML = `
                    <h2>Bài viết về Object trong JavaScript</h2>
                    <p>
                        Object trong JavaScript là một kiểu dữ liệu quan trọng, giúp lưu trữ các cặp key-value.
                        Một object có thể chứa các thuộc tính (property) và phương thức (method) để xử lý dữ liệu hiệu quả.
                    </p>
                `;
            }
        });
    });
});