window.onload = function () {
    var toggleColor = function () {
        var e = document.getElementById('test');
        var currentColor = e.style.color;
        if (currentColor === 'red') {
            e.style.color = 'black';
        } else {
            e.style.color = 'red';
        }
        console.log("色を切り替えました");
    }
    setInterval(toggleColor, 1000); // 2秒ごとにtoggleColor関数を実行
}


