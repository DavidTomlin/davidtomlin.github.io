var app = angular.module("pageRunner", [])
                 .controller("pageCtrl", function($scope) {
                    var includes = [
                      { file : "includes/nav.html" },
                      { file : "includes/profile.html" },
                      { file : "includes/code.html" },
                      { file : "includes/resume.html" },
                      { file : "includes/code.html" },
                      { file : "includes/contact.html" }
                    ];

                    $scope.includes = includes;
                 })

                 .controller("navCtrl", function($scope) {
                    var pages = [
                      { page : "home" },
                      { page : "profile" },
                      { page : "resume" },
                      { page : "contact" }
                    ];

                    var extLinks = [
                      { url : "mailto:david.andrew.tomlin@gmail.com?Subject=Website",
                        img : "images/v_email_white.png" },
                      { url : "https://www.linkedin.com/in/david-tomlin-903a394b",
                        img : "images/v_linkedin_white.png" },
                      { url : "https://my.indeed.com/p/davidt-m8wb0pt",
                        img : "images/v_indeed_white.png" },
                      /** Facebook contact info
                      { url : "https://www.facebook.com/Tomlin.David",
                        img : "images/v_facebook_white.png" },
                      */
                      /** Google+ contact info
                      { url : "https://plus.google.com/100602191543623564239",
                        img : "images/v_googleplus_white.png" },
                      */
                      { url : "https://twitter.com/david_tomlin",
                        img : "images/v_twitter_white.png" }
                    ];

                    var scrollToPage = function(index) {
                      window.scrollToPage(pages[index].page);
                    }

                    $scope.pages = pages;
                    $scope.extLinks = extLinks;
                    $scope.scrollToPage = scrollToPage
                 })

               .controller("profileCtrl", function($scope) {
                  var profile = {
                    firstName : "David",
                    lastName : "Tomlin",
                    age : 30,
                    city : "Independence",
                    state : "MO"
                  };

                  $scope.profile = profile;
               })

               .controller("codeCtrl", function($scope) {
                  var motto = [
                    { word : "eat" },
                    { word : "sleep" },
                    { word : "code" },
                    { word : "repeat" }
                  ];

                  $scope.motto = motto;
               });
