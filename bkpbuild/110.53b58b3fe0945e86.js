"use strict";(self.webpackChunkghumao=self.webpackChunkghumao||[]).push([[110],{2110:(U,u,l)=>{l.r(u),l.d(u,{Himachalpackage1Module:()=>f});var c=l(9808),d=l(8118),e=l(1223),p=l(3431),A=l(2838),Z=l(2382);const T=function(a){return{sticky:a}},h=[{path:"",component:(()=>{class a{constructor(){this.slideConfigPackage={dots:!0,arrows:!1,infinite:!0,autoplay:!0,autoplaySpeed:2500,speed:2500,slidesToShow:2,slidesToScroll:1,pauseOnHover:!0,pauseOnFocus:!1,respondTo:"slider",adaptiveHeight:!0,responsive:[{breakpoint:767,settings:{slidesToShow:1}}]},this.sticky=!1,this.selector=[],setTimeout(()=>{window.scrollTo(0,0)},1e3)}ngOnInit(){}ngAfterViewInit(){this.initTopPosition=$("#myTab").offset().top;for(var n,i=$(".tab li a"),t=[],o=0;o<i.length;o++){var g=$(i[o]).attr("href");t.push(g),n=t.join(" , ")}console.log(n),this.selector=t}handleScroll(i){if(this.stopScrollDetection)return!1;$(window).scrollTop()>this.initTopPosition?$("#myTab").addClass("sticky"):$("#myTab").removeClass("sticky");var t=$(window).scrollTop();this.selector.map(n=>{var o=$(n).position().top;if(t-o>270){var s=$(n).attr("id");$(".tab li a").removeClass("active"),$('a[href="#'+s+'"]').addClass("active")}})}setActive(i){console.info(i),this.selector.map(t=>{var n=$(t).attr("id");$(".tab li a").removeClass("active"),$('a[href="#'+n+'"]').removeClass("active"),t!=i||(this.stopScrollDetection=!0,setTimeout(()=>{$('a[href="#'+i+'"]').addClass("active");let o=t.split("#")[1],s=document.getElementById(o);null!=s&&window.scroll({top:s.offsetTop+300,behavior:"smooth"}),this.stopScrollDetection=!1},100)),setTimeout(()=>{this.selector.map(o=>{o!=i?$(o+"-tab").removeClass("active"):$(i+"-tab").addClass("active"),$("#myTab").addClass("sticky")})},500)})}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-package"]],hostBindings:function(i,t){1&i&&e.NdJ("scroll",function(o){return t.handleScroll(o)},!1,e.Jf7)},decls:243,vars:4,consts:[[1,"inner-banner-wrap"],[1,"inner-baner-container",2,"background-image","url(assets/images/inner-banner.jpg)"],[1,"container"],[1,"inner-banner-content"],[1,"inner-title"],[1,"inner-shape"],[1,"single-tour-section"],[1,"row"],[1,"col-lg-8"],[1,"single-tour-inner"],[1,"feature-image"],["src","assets/images/img27.jpg","alt",""],[1,"package-meta","text-center"],[1,"far","fa-clock"],[1,"fas","fa-user-friends"],[1,"fas","fa-map-marked-alt"],["id","test"],[1,"tab-container"],["id","myTab","role","tablist",1,"nav","nav-tabs","tab",3,"ngClass"],[1,"nav-item",3,"click"],["id","program-tab","data-toggle","tab","href","#program","role","tab","aria-controls","program","aria-selected","false",1,"nav-link"],["id","inclusionexclusion-tab","data-toggle","tab","href","#inclusionexclusion","role","tab","aria-controls","program","aria-selected","false",1,"nav-link"],["id","review-tab","data-toggle","tab","href","#review","role","tab","aria-controls","review","aria-selected","false",1,"nav-link"],["id","map-tab","data-toggle","tab","href","#map","role","tab","aria-controls","map","aria-selected","false",1,"nav-link"],["id","myTabContent",1,"tab-content"],["tabContent",""],["id","program","role","tabpanel","aria-labelledby","program-tab",1,"tab-pane","show","active"],["program",""],[1,"itinerary-content"],[1,"itinerary-timeline-wrap"],[1,"timeline-content"],[1,"day-count"],["id","inclusionexclusion","role","tabpanel","aria-labelledby","inclusionexclusion-tab",1,"tab-pane","show","active"],["inclusionexclusion",""],[1,"overview-content"],[1,"col-md-6"],["id","review","role","tabpanel","aria-labelledby","review-tab",1,"tab-pane","show","active"],["review",""],[1,"row","mt-3"],[1,"col-md-12"],["id","map","role","tabpanel","aria-labelledby","map-tab",1,"tab-pane","show","active"],["map",""],[1,"map-area","mt-3"],[1,"table-bordered"],[1,"single-tour-gallery"],[1,"single-tour-slider","slick-initialized","slick-slider","slick-dotted"],[3,"configType"],[1,"col-lg-4"],[1,"subscribe-section",2,"background-image","url(assets/images/img16.jpg)"],[1,"col-lg-7"],[1,"section-heading","section-heading-white"],[1,"dash-style"],[1,"newsletter-form"],["type","email","name","s","placeholder","Your Email Address"],["type","submit","name","signup","value","SIGN UP NOW!"]],template:function(i,t){1&i&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"h1",4),e._uU(5,"Package Detail"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(6,"div",5),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"div",2),e.TgZ(9,"div",7),e.TgZ(10,"div",8),e.TgZ(11,"div",9),e.TgZ(12,"h2"),e._uU(13,"Beautiful Shimla & Manali"),e.qZA(),e.TgZ(14,"figure",10),e._UZ(15,"img",11),e.TgZ(16,"div",12),e.TgZ(17,"ul"),e.TgZ(18,"li"),e._UZ(19,"i",13),e._uU(20," 5 Nights / 6 Days "),e.qZA(),e.TgZ(21,"li"),e._UZ(22,"i",14),e._uU(23," People: 4 "),e.qZA(),e.TgZ(24,"li"),e._UZ(25,"i",15),e._uU(26," Himachal "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(27,"div",16),e.TgZ(28,"div",17),e.TgZ(29,"ul",18),e.TgZ(30,"li",19),e.NdJ("click",function(){return t.setActive("#program")}),e.TgZ(31,"a",20),e._uU(32,"PROGRAM"),e.qZA(),e.qZA(),e.TgZ(33,"li",19),e.NdJ("click",function(){return t.setActive("#inclusionexclusion")}),e.TgZ(34,"a",21),e._uU(35,"INCLUSIONS/EXCLUSIONS"),e.qZA(),e.qZA(),e.TgZ(36,"li",19),e.NdJ("click",function(){return t.setActive("#review")}),e.TgZ(37,"a",22),e._uU(38,"TERMS AND CONDITIONS "),e.qZA(),e.qZA(),e.TgZ(39,"li",19),e.NdJ("click",function(){return t.setActive("#map")}),e.TgZ(40,"a",23),e._uU(41,"CANCELLATIONS CHARGES "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(42,"div",24,25),e.TgZ(44,"div",26,27),e.TgZ(46,"div",28),e.TgZ(47,"h3"),e._uU(48,"Program "),e.TgZ(49,"span"),e._uU(50,"( 6 days )"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(51,"div",29),e.TgZ(52,"ul"),e.TgZ(53,"li"),e.TgZ(54,"div",30),e.TgZ(55,"div",31),e._uU(56,"Day "),e.TgZ(57,"span"),e._uU(58,"1"),e.qZA(),e.qZA(),e.TgZ(59,"h4"),e._uU(60,"Delhi - Shimla (380 kms . / 10 hrs.). "),e.qZA(),e.TgZ(61,"p"),e._uU(62,"Morning departure to Shimla. Reach Shimla in the evening and check in to the hotel. Evening enjoy the Mall road of Shimla and the Ridge. Overnight Stay. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(63,"li"),e.TgZ(64,"div",30),e.TgZ(65,"div",31),e._uU(66,"Day "),e.TgZ(67,"span"),e._uU(68,"2"),e.qZA(),e.qZA(),e.TgZ(69,"h4"),e._uU(70,"Shimla - Kufri - Shimla "),e.qZA(),e.TgZ(71,"p"),e._uU(72,"After breakfast, proceed to visit Kufri the famous tourist destination known for snow-laden peaks, skiing and Zoo. Also visit Christ Church in Kufri . Evening visit the beautiful Mall Road of Shimla . Overnight Stay at Shimla. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(73,"li"),e.TgZ(74,"div",30),e.TgZ(75,"div",31),e._uU(76,"Day "),e.TgZ(77,"span"),e._uU(78,"3"),e.qZA(),e.qZA(),e.TgZ(79,"h4"),e._uU(80," Shimla - Manali (260 kms . / 9 hrs.) "),e.qZA(),e.TgZ(81,"p"),e._uU(82,"After breakfast proceed to Manali ,pass through Beas river, Sutlej River and the beautiful Kullu Valley. (surrounded by Shivalik Ranges of Himalayas is famous for Apple Trees). Reach Manali in the evening. Evening visit local market. Overnight Stay at Manali. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(83,"li"),e.TgZ(84,"div",30),e.TgZ(85,"div",31),e._uU(86,"Day "),e.TgZ(87,"span"),e._uU(88,"4"),e.qZA(),e.qZA(),e.TgZ(89,"h4"),e._uU(90,"Manali - Rohtang Pass - Gulaba - Manali "),e.qZA(),e.TgZ(91,"p"),e._uU(92,"Enjoy spectacular drive towards the famous point of Manali \u201cRohtang Snow Point\u201d at an altitude of 3,980 mts. Here you can snow activities here such as skiing, snow scooter ride, and horse riding to make the most of your Manali Tour (Rohtang Pass is closed on Tuesday). While returning also visit Solang valley \u2013the famous point for skiing in winter and in Summer famous for parachuting, zorbing, paragliding, and horse riding.Evening return to Manali. Overnight Stay at Manali. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(93,"li"),e.TgZ(94,"div",30),e.TgZ(95,"div",31),e._uU(96,"Day "),e.TgZ(97,"span"),e._uU(98,"5"),e.qZA(),e.qZA(),e.TgZ(99,"h4"),e._uU(100,"Manali - Chandigarh (285 kms . / 9 hrs.). "),e.qZA(),e.TgZ(101,"p"),e._uU(102,"Morning proceed to Chandigarh .Arrive Chandigarh in the evening. En-route visit Pinjore Garden, Rock Garden, Rose Garden and boat ride in Sukhana Lake. Overnight Stay at Chandigarh. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(103,"li"),e.TgZ(104,"div",30),e.TgZ(105,"div",31),e._uU(106,"Day "),e.TgZ(107,"span"),e._uU(108,"6"),e.qZA(),e.qZA(),e.TgZ(109,"h4"),e._uU(110,"Chandigarh - Delhi (265 kms . / 5 hrs..). "),e.qZA(),e.TgZ(111,"p"),e._uU(112,"Proceed to Delhi ,enroute visit Kurukshetra (if time permits) and then drop to Airport /Railway station for your onward journey. Tour Concludes with nice memories. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(113,"b"),e._uU(114," Note: "),e.qZA(),e._uU(115," As per National Green Tribunal, only local Himachal taxis are allowed to Rohtang pass. Charges are extra. "),e.qZA(),e.qZA(),e.TgZ(116,"div",32,33),e.TgZ(118,"div",34),e.TgZ(119,"div",7),e.TgZ(120,"div",35),e.TgZ(121,"h4"),e._uU(122," TOUR INCLUSIONS "),e.qZA(),e.TgZ(123,"ul"),e.TgZ(124,"li"),e._uU(125,"- 2 nights accommodation in Shimla. "),e.qZA(),e.TgZ(126,"li"),e._uU(127,"- 2 nights accommodation in Manali . "),e.qZA(),e.TgZ(128,"li"),e._uU(129,"- Assistance at the airport. "),e.qZA(),e.TgZ(130,"li"),e._uU(131,"- Daily buffet breakfast in hotels. "),e.qZA(),e.TgZ(132,"li"),e._uU(133,"- A/C vehicle for all transfers and sightseeing as per the itinerary.( Ac will not operate in hilly areas as engine of vehicle will be seized)."),e.qZA(),e.TgZ(134,"li"),e._uU(135,"- All applicable Hotel taxes."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(136,"div",35),e.TgZ(137,"h4"),e._uU(138," TOUR EXCLUSIONS "),e.qZA(),e.TgZ(139,"ul"),e.TgZ(140,"li"),e._uU(141,"- Any Air/ Train Tickets."),e.qZA(),e.TgZ(142,"li"),e._uU(143,"- Expenses of personal nature."),e.qZA(),e.TgZ(144,"li"),e._uU(145,"- All Entrances & Guide charges. "),e.qZA(),e.TgZ(146,"li"),e._uU(147,"- Boat Ride & Horse rides, Jeep Safari / Rides or Cable car or Ropeway on direct payment basis. "),e.qZA(),e.TgZ(148,"li"),e._uU(149,"- Local vehicle charges for Aru Valley, Chadanbadi , Betab Valley at Pahalgam. "),e.qZA(),e.TgZ(150,"li"),e._uU(151,"-Supplement for Special activities as per the itinerary. "),e.qZA(),e.TgZ(152,"li"),e._uU(153,"-Items of personal nature like laundry, phone calls, tips to guides / drivers etc. "),e.qZA(),e.TgZ(154,"li"),e._uU(155,"-Camera / Video camera fees applicable at monument. "),e.qZA(),e.TgZ(156,"li"),e._uU(157,"-5% Government GST . "),e.qZA(),e.TgZ(158,"li"),e._uU(159,"-Any other items/services not mentioned in \u201c Inclusions \u201c. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(160,"div",36,37),e.TgZ(162,"div",34),e.TgZ(163,"div",38),e.TgZ(164,"div",39),e.TgZ(165,"h4"),e._uU(166," TERMS AND CONDITIONS "),e.qZA(),e.TgZ(167,"ul"),e.TgZ(168,"li"),e._uU(169,"- Price mentioned is on per person basis for two persons travelling together and sharing same room. "),e.qZA(),e.TgZ(170,"li"),e._uU(171,"- Bookings are subject to availability of rooms with the hotels. "),e.qZA(),e.TgZ(172,"li"),e._uU(173,"- The above package rate is not valid during national holidays, festivals, long weekends, Christmas and New Year. "),e.qZA(),e.TgZ(174,"li"),e._uU(175,"- The guest must carry photo identification like Passport/Driving License/Voter ID Card IN ORIGINAL at the point of check in at the hotel. "),e.qZA(),e.TgZ(176,"li"),e._uU(177,"- Rates are valid for India Nationals only. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(178,"div",40,41),e.TgZ(180,"div",42),e.TgZ(181,"h4"),e._uU(182," CANCELLATIONS CHARGES "),e.qZA(),e.TgZ(183,"table",43),e.TgZ(184,"tr"),e.TgZ(185,"th"),e._uU(186,"No of days prior to departure "),e.qZA(),e.TgZ(187,"th"),e._uU(188," Charges"),e.qZA(),e.TgZ(189,"th"),e._uU(190," Applied On"),e.qZA(),e.qZA(),e.TgZ(191,"tr"),e.TgZ(192,"td"),e._uU(193," 0-7 Days "),e.qZA(),e.TgZ(194,"td"),e._uU(195," 100 % "),e.qZA(),e.TgZ(196,"td"),e._uU(197," Package price per person "),e.qZA(),e.qZA(),e.TgZ(198,"tr"),e.TgZ(199,"td"),e._uU(200," 8-14 Days"),e.qZA(),e.TgZ(201,"td"),e._uU(202," 75 % "),e.qZA(),e.TgZ(203,"td"),e._uU(204," Package price per person"),e.qZA(),e.qZA(),e.TgZ(205,"tr"),e.TgZ(206,"td"),e._uU(207," 15-29 Days"),e.qZA(),e.TgZ(208,"td"),e._uU(209," 50 % "),e.qZA(),e.TgZ(210,"td"),e._uU(211," Package price per person"),e.qZA(),e.qZA(),e.TgZ(212,"tr"),e.TgZ(213,"td"),e._uU(214," 30-45 Days "),e.qZA(),e.TgZ(215,"td"),e._uU(216," 25 % "),e.qZA(),e.TgZ(217,"td"),e._uU(218," Package price per person"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(219,"div",44),e.TgZ(220,"h3"),e._uU(221,"POPULAR PACKAGES"),e.qZA(),e.TgZ(222,"div",45),e._UZ(223,"app-packageslider",46),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(224,"div",47),e._UZ(225,"app-packageenquiry"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(226,"section",48),e.TgZ(227,"div",2),e.TgZ(228,"div",7),e.TgZ(229,"div",49),e.TgZ(230,"div",50),e.TgZ(231,"h5",51),e._uU(232,"HOLIDAY PACKAGE OFFER"),e.qZA(),e.TgZ(233,"h2"),e._uU(234,"HOLIDAY SPECIAL 10% OFF !"),e.qZA(),e.TgZ(235,"h4"),e._uU(236,"Sign up now to recieve hot special offers and information about the best tour packages, updates and discounts !!"),e.qZA(),e.TgZ(237,"div",52),e.TgZ(238,"form"),e._UZ(239,"input",53),e._UZ(240,"input",54),e.qZA(),e.qZA(),e.TgZ(241,"p"),e._uU(242,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eaque adipiscing, luctus eleifend temporibus occaecat luctus eleifend tempo ribus."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(29),e.Q6J("ngClass",e.VKq(2,T,t.sticky)),e.xp6(194),e.Q6J("configType","other"))},directives:[c.mk,p.f,A.C,Z._Y,Z.JL,Z.F],styles:[""],encapsulation:2}),a})()}];let m=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[d.Bz.forChild(h)],d.Bz]}),a})();var v=l(1461),q=l(4466);let f=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[c.ez,v.Sv,m,q.m]]}),a})()}}]);