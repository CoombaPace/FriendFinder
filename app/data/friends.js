// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friends = [
    {
        "name":"Whitney Cummings",
        "photo":"https://pbs.twimg.com/profile_images/1119325792343748608/S-tLxwev_400x400.jpg",
        "scores":[
           4,
           4,
           2,
           4,
           3,
           1,
           2,
           5,
           4,
           1
            ]
        },
    {
    "name":"Joey Diaz",
    "photo":"https://i.ticketweb.com/i/00/07/35/04/01/Original.jpg?v=2",
    "scores":[
       3,
       2,
       1,
       2,
       5,
       1,
       5,
       3,
       4,
       1
        ]
  },
  {
    "name":"Nikki Glazer",
    "photo":"https://pbs.twimg.com/profile_images/1024293196401004544/c4YwJM1v_400x400.jpg",
    "scores":[
       1,
       3,
       4,
       5,
       1,
       5,
       3,
       5,
       2,
       5
        ]
  },
  {
    "name":"Tim Dillon",
    "photo":"https://www.imdb.com/name/nm3645534/mediaviewer/rm912814336",
    "scores":[
       5,
       3,
       2,
       2,
       5,
       5,
       5,
       3,
       4,
       5
        ]
  },
  {
    "name":"Iliza Shlesinger",
    "photo":"https://en.wikipedia.org/wiki/Iliza_Shlesinger#/media/File:Iliza_Shlesinger.jpg",
    "scores":[
       3,
       2,
       3,
       3,
       3,
       3,
       3,
       5,
       5,
       3
        ]
  },
  {
    "name":"Sam Tripoli",
    "photo":"https://www.imdb.com/name/nm2293462/mediaviewer/rm3211277568",
    "scores":[
       5,
       1,
       4,
       3,
       2,
       5,
       2,
       1,
       3,
       1
        ]
  },
  {
    "name":"Kate Quigley",
    "photo":"https://www.imdb.com/name/nm2386984/mediaviewer/rm8992256",
    "scores":[
       5,
       1,
       4,
       3,
       2,
       3,
       2,
       2,
       5,
       4
        ]
  },
  {
    "name":"Lee Syatt",
    "photo":"https://pbs.twimg.com/media/DiULl9EVAAAxgaR.jpg:large",
    "scores":[
       5,
       1,
       4,
       3,
       2,
       5,
       4,
       4,
       1,
       3
        ]
  },
  {
    "name":"Jessimae Peluso",
    "photo":"https://www.imdb.com/name/nm4593797/mediaviewer/rm3211983360",
    "scores":[
       5,
       1,
       4,
       3,
       2,
       1,
       2,
       2,
       1,
       4
        ]
  },
  {
    "name":"Aparna Nancherla",
    "photo":"https://www.imdb.com/name/nm5478103/mediaviewer/rm2685010688",
    "scores":[
       5,
       1,
       4,
       3,
       2,
       4,
       4,
       2,
       4,
       5
        ]
  }
  ]
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;