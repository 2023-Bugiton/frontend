/*document.getElementById('itemSelect').addEventListener('change', function() {
    var selectedValue = this.value;
    switch (selectedValue) {
    case 'opt1':
        window.location.href = 'https://songPage/index.html';
        break;
    case 'opt2':
        window.location.href = 'songPage/index.html';
        break;
    case 'opt3':
        window.location.href = 'https://songPage/index.html';
        break;
    default:
        break;
    }
})*/

function moveurl(url) { 
    window.location.href = url;
} 

function redirectToPage(url) {
    window.location.href = url;
}

function showAllDescription(){

}

function showAllDescription(){
    var pagetitle= document.querySelector(".pageTitle2");
    pagetitle.innerHTML = "한 해의 사계절이 어우러지는 순간"
    var subtitle = document.querySelector(".subTitle2");
    subtitle.innerHTML = "봄의 햇살과 생명력, 여름의 태양과 열정 <br>" +
    "가을의 우아함과 변화, 겨울의 평화와 공기.<br>" +
    "우리는 사계절의 선물을 받아들이며, 우주의 신비와 함께하는 아름다운 순간. <br>" +
    "사계절의 다양성을 노래하며, 우리만의 이야기를 펼쳐나갈 수 있습니다.<br>";
}

function showSpringDescription() {
    var pagetitle= document.querySelector(".pageTitle2");
    pagetitle.innerHTML = "다시 돌아온, 봄"
    var subtitle = document.querySelector(".subTitle2");
    subtitle.innerHTML = "봄이 찾아온다면, 눈부신 햇살이 어깨를 가볍게 스쳐 지나갈 것입니다. <br>" +
    "그리고 그 따스함은 마음에도 온기를 전해줄 것입니다. <br>" +
    "작고 작은 꽃들이 흙 속에서 비는 물방울을 받아 피어나면, <br>" +
    "세상은 한껏 활기를 띠게 됩니다. 나무들은 새싹을 내고, <br>" +
    "들은 푸른 잔디로 덮이며, 꽃들은 다채롭게 피어나기 시작합니다.";
}

function showSummerDescription() {
    var pagetitle= document.querySelector(".pageTitle2");
    pagetitle.innerHTML = "다시 돌아온, 여름"
    var subtitle = document.querySelector(".subTitle2");
    subtitle.innerHTML = "여름이 찾아온다면, 태양은 하늘을 가득 채우며 뜨거운 바람이 머리카락을 흩날릴 것입니다. 밝고 활기찬 에너지는 주변을 둘러싸고  <br>" +
    "마음을 싱싱하게 만들어줄 것입니다. 작고 소중한 열매들은 나무 가지를 풍성하게 달게 하고, 끊임없이 춤추는 파도는 해변을 환하게 비추며, 여름꽃들은 화려하게 피어나기 시작합니다.";
}

function showAutumnDescription() {
    var pagetitle= document.querySelector(".pageTitle2");
    pagetitle.innerHTML = "다시 돌아온, 가을"
    var subtitle = document.querySelector(".subTitle2");
    subtitle.innerHTML = "가을이 찾아온다면, 하늘은 맑고 푸르러서 사람들의 시선을 사로잡을 것입니다. 독특한 향기가 공기를 가득 메우며, 산들은 다채로운 빛깔로 물들어지고 나뭇잎은 점점 노랗게 변해갈 것입니다. 바람은 부드럽게 몸을 스치며, 가을꽃들은 땅 위에서 춤을 추기 시작합니다.";
}

function showWinterDescription() {
    var pagetitle= document.querySelector(".pageTitle2");
    pagetitle.innerHTML = "다시 돌아온, 겨울"
    var subtitle = document.querySelector(".subTitle2");
    subtitle.innerHTML = "겨울이 찾아온다면, 하얀 눈이 하늘에서 내리며 세상을 흰색으로 덮을 것입니다. 차가운 공기는 볼을 핥으면서 얼음처럼 시원한 느낌을 전해줄 것입니다. 나무들은 가지마다 작은 얼음 결정을 담을 것이고, 얼어붙은 호수는 어린이들의 미끄럼틀이 될 것입니다. 하지만 조그마한 새들은 온기를 찾아 다른 곳으로 떠날 것이고, 푸른 잔디는 흰 눈 아래에서 잠들게 될 것입니다.";
}





