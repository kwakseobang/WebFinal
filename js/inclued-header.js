<script>
    document.addEventListener("DOMContentLoaded", function () {
        fetch("/pages/header.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("header").innerHTML = data;

                // 햄버거 메뉴 클릭 이벤트 추가
                document.getElementById('hamburger-menu').addEventListener('click', function () {
                    var navMenu = document.getElementById('nav-menu');
                    if (navMenu.style.display === 'block') {
                        navMenu.style.display = 'none';
                    } else {
                        navMenu.style.display = 'block';
                    }
                });
            })
            // .catch(error => console.error('Error loading header:', error));
    });
</script>
