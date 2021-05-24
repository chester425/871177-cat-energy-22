ymaps.ready(init);

function init () {
  var myMap = new ymaps.Map("map", {
    // Центр карты, указываем коордианты
    center:[59.937853, 30.329614],
    // Масштаб, тут все просто
    zoom: 17,
    // Отключаем все элементы управления
    controls: []
  });

  var myGeoObjects = [];

  // Наша метка, указываем коордианты
  myGeoObjects = new ymaps.Placemark([59.937853, 30.329614],{
    balloonContentBody: "Текст в балуне",
  },{
    iconLayout: "default#image",
    // Путь до нашей картинки
    iconImageHref: "img/map-pin.png",
    // Размер по ширине и высоте
    iconImageSize: [55, 53],
    // Смещение левого верхнего угла иконки относительно
    // её «ножки» (точки привязки).
    iconImageOffset: [-25, -40]

  });

  var clusterer = new ymaps.Clusterer({
    clusterDisableClickZoom: false,
    clusterOpenBalloonOnClick: false,
  });

  clusterer.add(myGeoObjects);
  myMap.geoObjects.add(clusterer);
  // Отлючаем возможность изменения масштаба
  myMap.behaviors.disable("scrollZoom");

}
