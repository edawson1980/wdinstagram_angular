var entries = [
  {author: "Tina Belcher", body: "butts, butts, butts", photo_url: "https://s-media-cache-ak0.pinimg.com/736x/48/e1/27/48e127150017527261323feb1ee62df5.jpg"},
  {author: "Good Doggo", body: "I am your debil!", photo_url: "https://s-media-cache-ak0.pinimg.com/originals/aa/e4/3e/aae43e8c3134f865141ae379929851c8.jpg"},
  {author: "Fiachra Olairn", body: "So at parties he warrant oh staying. Square new horses and put better end.", photo_url: "https://s-media-cache-ak0.pinimg.com/736x/18/78/36/187836371b9924403457af4878018934.jpg"},
  {author: "Twinkie the Kid", body: "We neglected mr perfectly continual dependent. ", photo_url: "http://i1.kym-cdn.com/photos/images/original/000/581/567/bab.jpg"},
];

angular
  .module("wdinstagram", [
    "ui.router"
  ])

  .config([
    "$stateProvider",
    RouterFunction
  ])

  .controller("EntryIndexController", [
    EntryIndexControllerFunction
  ])

  .controller("EntryShowController", [
    "$stateParams",
    EntryShowControllerFunction
  ])

  function RouterFunction ($stateProvider){
    $stateProvider
    .state("entryIndex", {
      url: "/entries",
      templateUrl: "/js/ng-views/index.html",
      controller: "EntryIndexController",
      controllerAs: "vm"
    })

    .state("entryShow", {
      url: "/entries/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "EntryShowController",
      controllerAs: "vm"
    })
  }

  function EntryIndexControllerFunction (){
    this.entries = entries;
  }

  function EntryShowControllerFunction ($stateParams){
    this.entry = entries[$stateParams.id];
  }
