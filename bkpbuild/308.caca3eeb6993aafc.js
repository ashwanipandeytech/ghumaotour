"use strict";(self.webpackChunkghumao=self.webpackChunkghumao||[]).push([[308],{8308:(v,u,o)=>{o.r(u),o.d(u,{Kashmirpackage1Module:()=>p});var A=o(9808),T=o(8118),e=o(1223),g=o(1461);const d=function(a){return{sticky:a}},c=[{path:"",component:(()=>{class a{constructor(){this.slideConfigPackage={dots:!0,arrows:!1,infinite:!0,autoplay:!0,autoplaySpeed:2500,speed:2500,slidesToShow:2,slidesToScroll:1,pauseOnHover:!0,pauseOnFocus:!1,respondTo:"slider",adaptiveHeight:!0,responsive:[{breakpoint:767,settings:{slidesToShow:1}}]},this.sticky=!1,this.selector=[],setTimeout(()=>{window.scrollTo(0,0)},1e3)}ngOnInit(){}ngAfterViewInit(){this.initTopPosition=$("#myTab").offset().top;for(var t,i=$(".tab li a"),Z=[],n=0;n<i.length;n++){var s=$(i[n]).attr("href");Z.push(s),t=Z.join(" , ")}console.log(t),this.selector=Z}handleScroll(i){if(this.stopScrollDetection)return!1;$(window).scrollTop()>this.initTopPosition?$("#myTab").addClass("sticky"):$("#myTab").removeClass("sticky");var Z=$(window).scrollTop();this.selector.map(t=>{var n=$(t).position().top;if(Z-n>270){var l=$(t).attr("id");$(".tab li a").removeClass("active"),$('a[href="#'+l+'"]').addClass("active")}})}setActive(i){console.info(i),this.selector.map(Z=>{var t=$(Z).attr("id");$(".tab li a").removeClass("active"),$('a[href="#'+t+'"]').removeClass("active"),Z!=i||(this.stopScrollDetection=!0,setTimeout(()=>{$('a[href="#'+i+'"]').addClass("active");let n=Z.split("#")[1],l=document.getElementById(n);null!=l&&window.scroll({top:l.offsetTop+300,behavior:"smooth"}),this.stopScrollDetection=!1},100)),setTimeout(()=>{this.selector.map(n=>{n!=i?$(n+"-tab").removeClass("active"):$(i+"-tab").addClass("active"),$("#myTab").addClass("sticky")})},500)})}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-package"]],hostBindings:function(i,Z){1&i&&e.NdJ("scroll",function(n){return Z.handleScroll(n)},!1,e.Jf7)},decls:601,vars:4,consts:[[1,"inner-banner-wrap"],[1,"inner-baner-container",2,"background-image","url(assets/images/inner-banner.jpg)"],[1,"container"],[1,"inner-banner-content"],[1,"inner-title"],[1,"inner-shape"],[1,"single-tour-section"],[1,"row"],[1,"col-lg-8"],[1,"single-tour-inner"],[1,"feature-image"],["src","assets/images/img27.jpg","alt",""],[1,"package-meta","text-center"],[1,"far","fa-clock"],[1,"fas","fa-user-friends"],[1,"fas","fa-map-marked-alt"],["id","test"],[1,"tab-container"],["id","myTab","role","tablist",1,"nav","nav-tabs","tab",3,"ngClass"],[1,"nav-item",3,"click"],["id","program-tab","data-toggle","tab","href","#program","role","tab","aria-controls","program","aria-selected","false",1,"nav-link"],["id","inclusionexclusion-tab","data-toggle","tab","href","#inclusionexclusion","role","tab","aria-controls","program","aria-selected","false",1,"nav-link"],["id","review-tab","data-toggle","tab","href","#review","role","tab","aria-controls","review","aria-selected","false",1,"nav-link"],["id","map-tab","data-toggle","tab","href","#map","role","tab","aria-controls","map","aria-selected","false",1,"nav-link"],["id","myTabContent",1,"tab-content"],["tabContent",""],["id","program","role","tabpanel","aria-labelledby","program-tab",1,"tab-pane","show","active"],["program",""],[1,"itinerary-content"],[1,"itinerary-timeline-wrap"],[1,"timeline-content"],[1,"day-count"],["id","inclusionexclusion","role","tabpanel","aria-labelledby","inclusionexclusion-tab",1,"tab-pane","show","active"],["inclusionexclusion",""],[1,"overview-content"],[1,"col-md-6"],["id","review","role","tabpanel","aria-labelledby","review-tab",1,"tab-pane","show","active"],["review",""],[1,"row","mt-3"],[1,"col-md-12"],["id","map","role","tabpanel","aria-labelledby","map-tab",1,"tab-pane","show","active"],["map",""],[1,"map-area","mt-3"],[1,"table-bordered"],[1,"single-tour-gallery"],[1,"single-tour-slider","slick-initialized","slick-slider","slick-dotted"],[1,"row","package-slider","carousel",3,"config"],["slickModal","slick-carousel"],["ngxSlickItem","",1,"col-lg-6","col-md-6","col-sm-4","slide"],[1,"package-wrap"],["href","#"],["src","assets/images/img5.jpg","alt",""],[1,"package-price"],[1,"package-content-wrap"],[1,"fas","fa-map-marker-alt"],[1,"package-content"],[1,"review-area"],[1,"review-text"],["title","Rated 5 out of 5",1,"rating-start"],[2,"width","60%"],[1,"innercontent"],[1,"btn-wrap"],["href","#",1,"button-text","width-6"],[1,"fas","fa-arrow-right"],["src","assets/images/img6.jpg","alt",""],["src","assets/images/img7.jpg","alt",""],["ngxSlickItem","",1,"col-lg-6col-md-6","col-sm-4","slide"],[1,"col-lg-4"],[1,"sidebar"],[1,"price"],[1,"start-wrap"],[1,"widget-bg","booking-form-wrap"],[1,"bg-title"],[1,"booking-form"],[1,"col-sm-12"],[1,"form-group"],["name","name_booking","type","text","placeholder","Full Name"],["name","email_booking","type","text","placeholder","Email"],["name","phone_booking","type","text","placeholder","Number"],["type","text","name","s","autocomplete","off","readonly","readonly","placeholder","Date","id","dp1652000334191",1,"input-date-picker","hasDatepicker"],[1,""],[1,"col-sm-6"],[1,"checkbox-list"],["type","checkbox","name","s"],[1,"custom-checkbox"],[1,"form-group","submit-btn"],["type","submit","name","submit","value","Boook Now"],[1,"widget-bg","information-content","text-center"],["href","#",1,"button-primary"],[1,"travel-package-content","text-center",2,"background-image","url(assets/images/img11.jpg)"],[1,"far","fa-arrow-alt-circle-right"],[1,"subscribe-section",2,"background-image","url(assets/images/img16.jpg)"],[1,"col-lg-7"],[1,"section-heading","section-heading-white"],[1,"dash-style"],[1,"newsletter-form"],["type","email","name","s","placeholder","Your Email Address"],["type","submit","name","signup","value","SIGN UP NOW!"]],template:function(i,Z){1&i&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"h1",4),e._uU(5,"Package Detail"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(6,"div",5),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"div",2),e.TgZ(9,"div",7),e.TgZ(10,"div",8),e.TgZ(11,"div",9),e.TgZ(12,"h2"),e._uU(13,"Amazing Kashmir with Srinagar, Pahalgam and Gulmarg ( Ex \u2013Srinagar)"),e.qZA(),e.TgZ(14,"figure",10),e._UZ(15,"img",11),e.TgZ(16,"div",12),e.TgZ(17,"ul"),e.TgZ(18,"li"),e._UZ(19,"i",13),e._uU(20," 4 Nights / 5 Days "),e.qZA(),e.TgZ(21,"li"),e._UZ(22,"i",14),e._uU(23," People: 4 "),e.qZA(),e.TgZ(24,"li"),e._UZ(25,"i",15),e._uU(26," Kashmir "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(27,"div",16),e.TgZ(28,"div",17),e.TgZ(29,"ul",18),e.TgZ(30,"li",19),e.NdJ("click",function(){return Z.setActive("#program")}),e.TgZ(31,"a",20),e._uU(32,"PROGRAM"),e.qZA(),e.qZA(),e.TgZ(33,"li",19),e.NdJ("click",function(){return Z.setActive("#inclusionexclusion")}),e.TgZ(34,"a",21),e._uU(35,"INCLUSIONS/EXCLUSIONS"),e.qZA(),e.qZA(),e.TgZ(36,"li",19),e.NdJ("click",function(){return Z.setActive("#review")}),e.TgZ(37,"a",22),e._uU(38,"TERMS AND CONDITIONS "),e.qZA(),e.qZA(),e.TgZ(39,"li",19),e.NdJ("click",function(){return Z.setActive("#map")}),e.TgZ(40,"a",23),e._uU(41,"CANCELLATIONS CHARGES "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(42,"div",24,25),e.TgZ(44,"div",26,27),e.TgZ(46,"div",28),e.TgZ(47,"h3"),e._uU(48,"Program "),e.TgZ(49,"span"),e._uU(50,"( 5 days )"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(51,"div",29),e.TgZ(52,"ul"),e.TgZ(53,"li"),e.TgZ(54,"div",30),e.TgZ(55,"div",31),e._uU(56,"Day "),e.TgZ(57,"span"),e._uU(58,"1"),e.qZA(),e.qZA(),e.TgZ(59,"h4"),e._uU(60,"Arrive Srinagar "),e.qZA(),e.TgZ(61,"p"),e._uU(62,"Arrival at Srinagar Airport. Upon arrival, meet & greet and transfer to Hotel / House Boat. Proceed for local sightseeing visiting Mughal Gardens-Cheshmashahi, NishatBagh (Abode of pleasure) Built by Asif Khan Brother-in-law of Emperor Jehangir in 1632 AD and Shalimar Bagh (Abode of love) on the bank of Dal Lake with the Zabarwan Mountain in the background. Late afternoon Shikara ride on Dal Lake visiting floating and Vegetable gardens etc. Also witness walnut woodcarving and Paper Machine making demonstration. Overnight stay in Hotel/ Houseboat at Srinagar. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(63,"li"),e.TgZ(64,"div",30),e.TgZ(65,"div",31),e._uU(66,"Day "),e.TgZ(67,"span"),e._uU(68,"2"),e.qZA(),e.qZA(),e.TgZ(69,"h4"),e._uU(70,"Srinagar- Sonmarg-Srinagar(83 kms one way/ 3 hrs.) "),e.qZA(),e.TgZ(71,"p"),e._uU(72,"Morning after breakfast, proceed for full day excursion to Sonamarg (Meadow of Gold) .Sonmarg lies in Sindh valley stream with flowers and surrounded by mountains. Sonmarg is also the base for some interesting treks to the high altitude of Himalayan lakes. Enjoy horse riding up to Thajwas glacier and sledge riding on snow (at your own cost). Later evening drive back to Srinagar. Overnight stay at Srinagar. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(73,"li"),e.TgZ(74,"div",30),e.TgZ(75,"div",31),e._uU(76,"Day "),e.TgZ(77,"span"),e._uU(78,"3"),e.qZA(),e.qZA(),e.TgZ(79,"h4"),e._uU(80,"Srinagar-Pahalgam-Srinagar (95 kms one way / 3 hrs ) "),e.qZA(),e.TgZ(81,"p"),e._uU(82,"After breakfast, drive to Pahalgam (valley of shepherds). En-route visiting Saffron fields, Awantipora ruins (1100 yrs old temple of Lord Vishnu built by King Awantiverma), Pine forests and lot of rice fields. Arrive Srinagar and transfer to hotel. You can visit Betab Valley , Baisaran by Pony and local car ( at your own cost ) , Later have bridle walks and feed your cameras with the picture of magnificent view of mountains.Evening return back to Srinagar, Overnight stay at Srinagar. "),e._UZ(83,"br"),e._uU(84,"Note: You are required to hire a local cab to visit Aru Valley, Betaab Valley & Chandanwari as per the rules passed by the Taxi Union of Pahalgam. (Approx. Cost Rs. 1800 - 2000 per vehicle). "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(85,"li"),e.TgZ(86,"div",30),e.TgZ(87,"div",31),e._uU(88,"Day "),e.TgZ(89,"span"),e._uU(90,"4"),e.qZA(),e.qZA(),e.TgZ(91,"h4"),e._uU(92,"Srinagar- Gulmarg- Srinagar ( 60 kms one way / 2.5 hrs) "),e.qZA(),e.TgZ(93,"p"),e._uU(94,"After breakfast, proceed to Gulmarg (Meadow of Flowers) 2730 Mts above sea level. Gulmarg has one of the best ski slopes in the world and highest golf course of the world with 18 holes. 0ne can also have the view of Nanga Parbat if weather permits. The view enroute from Tangmarg to Gulmarg is fascinating. One can experience the longest cable car ride up to the Khilanmarg Snow Point or also have a short trek up to Khilanmarg which can be covered in about 3hrs. Later evening return back to Srinagar . Overnight stay at Srinagar. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(95,"li"),e.TgZ(96,"div",30),e.TgZ(97,"div",31),e._uU(98,"Day "),e.TgZ(99,"span"),e._uU(100,"5"),e.qZA(),e.qZA(),e.TgZ(101,"h4"),e._uU(102,"Srinagar Airport "),e.qZA(),e.TgZ(103,"p"),e._uU(104,"After breakfast, transfer to Srinagar Airport to catch the flight for your onward journey. Tour concludes with nice memories. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(105,"div",32,33),e.TgZ(107,"div",34),e.TgZ(108,"div",7),e.TgZ(109,"div",35),e.TgZ(110,"h4"),e._uU(111," TOUR INCLUSIONS "),e.qZA(),e.TgZ(112,"ul"),e.TgZ(113,"li"),e._uU(114,"- 1 night accommodation in House Boat. "),e.qZA(),e.TgZ(115,"li"),e._uU(116,"- 3 nights accommodation in Srinagar . "),e.qZA(),e.TgZ(117,"li"),e._uU(118,"- Assistance at the airport. "),e.qZA(),e.TgZ(119,"li"),e._uU(120,"- Daily buffet breakfast in hotels. "),e.qZA(),e.TgZ(121,"li"),e._uU(122,"- A/C vehicle for all transfers and sightseeing as per the itinerary.( Ac will not operate in hilly areas as engine of vehicle will be seized)."),e.qZA(),e.TgZ(123,"li"),e._uU(124,"- All applicable Hotel taxes."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(125,"div",35),e.TgZ(126,"h4"),e._uU(127," TOUR EXCLUSIONS "),e.qZA(),e.TgZ(128,"ul"),e.TgZ(129,"li"),e._uU(130,"- Any Air/ Train Tickets."),e.qZA(),e.TgZ(131,"li"),e._uU(132,"- Expenses of personal nature."),e.qZA(),e.TgZ(133,"li"),e._uU(134,"- All Entrances & Guide charges. "),e.qZA(),e.TgZ(135,"li"),e._uU(136,"- Gandola ride . Boat Ride & Horse rides, Jeep Safari / Rides or Cable car or Ropeway on direct payment basis. "),e.qZA(),e.TgZ(137,"li"),e._uU(138,"- Local vehicle charges for Aru Valley, Chadanbadi , Betab Valley at Pahalgam. "),e.qZA(),e.TgZ(139,"li"),e._uU(140,"-Supplement for Special activities as per the itinerary. "),e.qZA(),e.TgZ(141,"li"),e._uU(142,"-Items of personal nature like laundry, phone calls, tips to guides / drivers etc. "),e.qZA(),e.TgZ(143,"li"),e._uU(144,"-Camera / Video camera fees applicable at monument. "),e.qZA(),e.TgZ(145,"li"),e._uU(146,"-5% Government GST . "),e.qZA(),e.TgZ(147,"li"),e._uU(148,"-Any other items/services not mentioned in \u201c Inclusions \u201c. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(149,"div",36,37),e.TgZ(151,"div",34),e.TgZ(152,"div",38),e.TgZ(153,"div",39),e.TgZ(154,"h4"),e._uU(155," TERMS AND CONDITIONS "),e.qZA(),e.TgZ(156,"ul"),e.TgZ(157,"li"),e._uU(158,"- Price mentioned is on per person basis for two persons travelling together and sharing same room. "),e.qZA(),e.TgZ(159,"li"),e._uU(160,"- Bookings are subject to availability of rooms with the hotels. "),e.qZA(),e.TgZ(161,"li"),e._uU(162,"- The above package rate is not valid during national holidays, festivals, long weekends, Christmas and New Year. "),e.qZA(),e.TgZ(163,"li"),e._uU(164,"- The guest must carry photo identification like Passport/Driving License/Voter ID Card IN ORIGINAL at the point of check in at the hotel. "),e.qZA(),e.TgZ(165,"li"),e._uU(166,"- Rates are valid for India Nationals only. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(167,"div",40,41),e.TgZ(169,"div",42),e.TgZ(170,"h4"),e._uU(171," CANCELLATIONS CHARGES "),e.qZA(),e.TgZ(172,"table",43),e.TgZ(173,"tr"),e.TgZ(174,"th"),e._uU(175,"No of days prior to departure "),e.qZA(),e.TgZ(176,"th"),e._uU(177," Charges"),e.qZA(),e.TgZ(178,"th"),e._uU(179," Applied On"),e.qZA(),e.qZA(),e.TgZ(180,"tr"),e.TgZ(181,"td"),e._uU(182," 0-7 Days "),e.qZA(),e.TgZ(183,"td"),e._uU(184," 100 % "),e.qZA(),e.TgZ(185,"td"),e._uU(186," Package price per person "),e.qZA(),e.qZA(),e.TgZ(187,"tr"),e.TgZ(188,"td"),e._uU(189," 8-14 Days"),e.qZA(),e.TgZ(190,"td"),e._uU(191," 75 % "),e.qZA(),e.TgZ(192,"td"),e._uU(193," Package price per person"),e.qZA(),e.qZA(),e.TgZ(194,"tr"),e.TgZ(195,"td"),e._uU(196," 15-29 Days"),e.qZA(),e.TgZ(197,"td"),e._uU(198," 50 % "),e.qZA(),e.TgZ(199,"td"),e._uU(200," Package price per person"),e.qZA(),e.qZA(),e.TgZ(201,"tr"),e.TgZ(202,"td"),e._uU(203," 30-45 Days "),e.qZA(),e.TgZ(204,"td"),e._uU(205," 25 % "),e.qZA(),e.TgZ(206,"td"),e._uU(207," Package price per person"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(208,"div",44),e.TgZ(209,"h3"),e._uU(210,"GALLERY / PHOTOS"),e.qZA(),e.TgZ(211,"div",45),e.TgZ(212,"ngx-slick-carousel",46,47),e.TgZ(214,"div",48),e.TgZ(215,"div",49),e.TgZ(216,"figure",10),e.TgZ(217,"a",50),e._UZ(218,"img",51),e.qZA(),e.qZA(),e.TgZ(219,"div",52),e.TgZ(220,"h6"),e.TgZ(221,"span"),e._uU(222,"$1,900 "),e.qZA(),e._uU(223," / per person "),e.qZA(),e.qZA(),e.TgZ(224,"div",53),e.TgZ(225,"div",12),e.TgZ(226,"ul"),e.TgZ(227,"li"),e._UZ(228,"i",13),e._uU(229," 7N/8D "),e.qZA(),e.TgZ(230,"li"),e._UZ(231,"i",14),e._uU(232," People: 5 "),e.qZA(),e.TgZ(233,"li"),e._UZ(234,"i",54),e._uU(235," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(236,"div",55),e.TgZ(237,"h3"),e.TgZ(238,"a",50),e._uU(239,"Colourful Rajasthan"),e.qZA(),e.qZA(),e.TgZ(240,"div",56),e.TgZ(241,"span",57),e._uU(242,"(25 reviews)"),e.qZA(),e.TgZ(243,"div",58),e._UZ(244,"span",59),e.qZA(),e.qZA(),e.TgZ(245,"div",60),e.TgZ(246,"p"),e._uU(247,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(248,"div",61),e.TgZ(249,"a",62),e._uU(250,"Enquire Now"),e._UZ(251,"i",63),e.qZA(),e.TgZ(252,"a",62),e._uU(253,"Know More "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(254,"div",48),e.TgZ(255,"div",49),e.TgZ(256,"figure",10),e.TgZ(257,"a",50),e._UZ(258,"img",64),e.qZA(),e.qZA(),e.TgZ(259,"div",52),e.TgZ(260,"h6"),e.TgZ(261,"span"),e._uU(262,"$1,900 "),e.qZA(),e._uU(263," / per person "),e.qZA(),e.qZA(),e.TgZ(264,"div",53),e.TgZ(265,"div",12),e.TgZ(266,"ul"),e.TgZ(267,"li"),e._UZ(268,"i",13),e._uU(269," 7N/8D "),e.qZA(),e.TgZ(270,"li"),e._UZ(271,"i",14),e._uU(272," People: 5 "),e.qZA(),e.TgZ(273,"li"),e._UZ(274,"i",54),e._uU(275," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(276,"div",55),e.TgZ(277,"h3"),e.TgZ(278,"a",50),e._uU(279,"Amazing Rajasthan (EX \u2013Jaipur )"),e.qZA(),e.qZA(),e.TgZ(280,"div",56),e.TgZ(281,"span",57),e._uU(282,"(25 reviews)"),e.qZA(),e.TgZ(283,"div",58),e._UZ(284,"span",59),e.qZA(),e.qZA(),e.TgZ(285,"div",60),e.TgZ(286,"p"),e._uU(287,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(288,"div",61),e.TgZ(289,"a",62),e._uU(290,"Enquire Now"),e._UZ(291,"i",63),e.qZA(),e.TgZ(292,"a",62),e._uU(293,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(294,"div",48),e.TgZ(295,"div",49),e.TgZ(296,"figure",10),e.TgZ(297,"a",50),e._UZ(298,"img",65),e.qZA(),e.qZA(),e.TgZ(299,"div",52),e.TgZ(300,"h6"),e.TgZ(301,"span"),e._uU(302,"$1,900 "),e.qZA(),e._uU(303," / per person "),e.qZA(),e.qZA(),e.TgZ(304,"div",53),e.TgZ(305,"div",12),e.TgZ(306,"ul"),e.TgZ(307,"li"),e._UZ(308,"i",13),e._uU(309," 10N/11D "),e.qZA(),e.TgZ(310,"li"),e._UZ(311,"i",14),e._uU(312," People: 5 "),e.qZA(),e.TgZ(313,"li"),e._UZ(314,"i",54),e._uU(315," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(316,"div",55),e.TgZ(317,"h3"),e.TgZ(318,"a",50),e._uU(319,"Rangilo Rajasthan with Sand Dunes"),e.qZA(),e.qZA(),e.TgZ(320,"div",56),e.TgZ(321,"span",57),e._uU(322,"(25 reviews)"),e.qZA(),e.TgZ(323,"div",58),e._UZ(324,"span",59),e.qZA(),e.qZA(),e.TgZ(325,"div",60),e.TgZ(326,"p"),e._uU(327,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(328,"div",61),e.TgZ(329,"a",62),e._uU(330,"Enquire Now"),e._UZ(331,"i",63),e.qZA(),e.TgZ(332,"a",62),e._uU(333,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(334,"div",48),e.TgZ(335,"div",49),e.TgZ(336,"figure",10),e.TgZ(337,"a",50),e._UZ(338,"img",64),e.qZA(),e.qZA(),e.TgZ(339,"div",52),e.TgZ(340,"h6"),e.TgZ(341,"span"),e._uU(342,"$1,900 "),e.qZA(),e._uU(343," / per person "),e.qZA(),e.qZA(),e.TgZ(344,"div",53),e.TgZ(345,"div",12),e.TgZ(346,"ul"),e.TgZ(347,"li"),e._UZ(348,"i",13),e._uU(349," 10N/11D "),e.qZA(),e.TgZ(350,"li"),e._UZ(351,"i",14),e._uU(352," People: 5 "),e.qZA(),e.TgZ(353,"li"),e._UZ(354,"i",54),e._uU(355," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(356,"div",55),e.TgZ(357,"h3"),e.TgZ(358,"a",50),e._uU(359,"Rajasthan with Sand Dunes"),e.qZA(),e.qZA(),e.TgZ(360,"div",56),e.TgZ(361,"span",57),e._uU(362,"(25 reviews)"),e.qZA(),e.TgZ(363,"div",58),e._UZ(364,"span",59),e.qZA(),e.qZA(),e.TgZ(365,"div",60),e.TgZ(366,"p"),e._uU(367,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(368,"div",61),e.TgZ(369,"a",62),e._uU(370,"Enquire Now"),e._UZ(371,"i",63),e.qZA(),e.TgZ(372,"a",62),e._uU(373,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(374,"div",48),e.TgZ(375,"div",49),e.TgZ(376,"figure",10),e.TgZ(377,"a",50),e._UZ(378,"img",51),e.qZA(),e.qZA(),e.TgZ(379,"div",52),e.TgZ(380,"h6"),e.TgZ(381,"span"),e._uU(382,"$1,900 "),e.qZA(),e._uU(383," / per person "),e.qZA(),e.qZA(),e.TgZ(384,"div",53),e.TgZ(385,"div",12),e.TgZ(386,"ul"),e.TgZ(387,"li"),e._UZ(388,"i",13),e._uU(389," 7N/8D "),e.qZA(),e.TgZ(390,"li"),e._UZ(391,"i",14),e._uU(392," People: 5 "),e.qZA(),e.TgZ(393,"li"),e._UZ(394,"i",54),e._uU(395," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(396,"div",55),e.TgZ(397,"h3"),e.TgZ(398,"a",50),e._uU(399,"Golden Triangle tour with Ajmer & Pushkar"),e.qZA(),e.qZA(),e.TgZ(400,"div",56),e.TgZ(401,"span",57),e._uU(402,"(25 reviews)"),e.qZA(),e.TgZ(403,"div",58),e._UZ(404,"span",59),e.qZA(),e.qZA(),e.TgZ(405,"div",60),e.TgZ(406,"p"),e._uU(407,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(408,"div",61),e.TgZ(409,"a",62),e._uU(410,"Enquire Now"),e._UZ(411,"i",63),e.qZA(),e.TgZ(412,"a",62),e._uU(413,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(414,"div",48),e.TgZ(415,"div",49),e.TgZ(416,"figure",10),e.TgZ(417,"a",50),e._UZ(418,"img",64),e.qZA(),e.qZA(),e.TgZ(419,"div",52),e.TgZ(420,"h6"),e.TgZ(421,"span"),e._uU(422,"$1,900 "),e.qZA(),e._uU(423," / per person "),e.qZA(),e.qZA(),e.TgZ(424,"div",53),e.TgZ(425,"div",12),e.TgZ(426,"ul"),e.TgZ(427,"li"),e._UZ(428,"i",13),e._uU(429," 7N/8D "),e.qZA(),e.TgZ(430,"li"),e._UZ(431,"i",14),e._uU(432," People: 5 "),e.qZA(),e.TgZ(433,"li"),e._UZ(434,"i",54),e._uU(435," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(436,"div",55),e.TgZ(437,"h3"),e.TgZ(438,"a",50),e._uU(439,"Golden Triangle tour with Ranthambore Jungle Safari"),e.qZA(),e.qZA(),e.TgZ(440,"div",56),e.TgZ(441,"span",57),e._uU(442,"(25 reviews)"),e.qZA(),e.TgZ(443,"div",58),e._UZ(444,"span",59),e.qZA(),e.qZA(),e.TgZ(445,"div",60),e.TgZ(446,"p"),e._uU(447,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(448,"div",61),e.TgZ(449,"a",62),e._uU(450,"Enquire Now"),e._UZ(451,"i",63),e.qZA(),e.TgZ(452,"a",62),e._uU(453,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(454,"div",66),e.TgZ(455,"div",49),e.TgZ(456,"figure",10),e.TgZ(457,"a",50),e._UZ(458,"img",65),e.qZA(),e.qZA(),e.TgZ(459,"div",52),e.TgZ(460,"h6"),e.TgZ(461,"span"),e._uU(462,"$1,900 "),e.qZA(),e._uU(463," / per person "),e.qZA(),e.qZA(),e.TgZ(464,"div",53),e.TgZ(465,"div",12),e.TgZ(466,"ul"),e.TgZ(467,"li"),e._UZ(468,"i",13),e._uU(469," 3N/4D "),e.qZA(),e.TgZ(470,"li"),e._UZ(471,"i",14),e._uU(472," People: 5 "),e.qZA(),e.TgZ(473,"li"),e._UZ(474,"i",54),e._uU(475," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(476,"div",55),e.TgZ(477,"h3"),e.TgZ(478,"a",50),e._uU(479,"Beautiful Udaipur with Mount Abu ( EX \u2013Udaipur)"),e.qZA(),e.qZA(),e.TgZ(480,"div",56),e.TgZ(481,"span",57),e._uU(482,"(25 reviews)"),e.qZA(),e.TgZ(483,"div",58),e._UZ(484,"span",59),e.qZA(),e.qZA(),e.TgZ(485,"div",60),e.TgZ(486,"p"),e._uU(487,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(488,"div",61),e.TgZ(489,"a",62),e._uU(490,"Enquire Now"),e._UZ(491,"i",63),e.qZA(),e.TgZ(492,"a",62),e._uU(493,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(494,"div",67),e.TgZ(495,"div",68),e.TgZ(496,"div",52),e.TgZ(497,"h5",69),e.TgZ(498,"span"),e._uU(499,"$649"),e.qZA(),e._uU(500," / per person "),e.qZA(),e.TgZ(501,"div",70),e.TgZ(502,"div",58),e._UZ(503,"span",59),e.qZA(),e.qZA(),e.qZA(),e.TgZ(504,"div",71),e.TgZ(505,"h4",72),e._uU(506,"Booking"),e.qZA(),e.TgZ(507,"form",73),e.TgZ(508,"div",7),e.TgZ(509,"div",74),e.TgZ(510,"div",75),e._UZ(511,"input",76),e.qZA(),e.qZA(),e.TgZ(512,"div",74),e.TgZ(513,"div",75),e._UZ(514,"input",77),e.qZA(),e.qZA(),e.TgZ(515,"div",74),e.TgZ(516,"div",75),e._UZ(517,"input",78),e.qZA(),e.qZA(),e.TgZ(518,"div",74),e.TgZ(519,"div",75),e._UZ(520,"input",79),e.qZA(),e.qZA(),e.TgZ(521,"div",74),e.TgZ(522,"h4",80),e._uU(523,"Add Options"),e.qZA(),e.qZA(),e.TgZ(524,"div",81),e.TgZ(525,"div",75),e.TgZ(526,"label",82),e._UZ(527,"input",83),e._UZ(528,"span",84),e._uU(529," Tour guide "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(530,"div",81),e.TgZ(531,"div",75),e.TgZ(532,"label",82),e._UZ(533,"input",83),e._UZ(534,"span",84),e._uU(535," Insurance "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(536,"div",81),e.TgZ(537,"div",75),e.TgZ(538,"label",82),e._UZ(539,"input",83),e._UZ(540,"span",84),e._uU(541," Dinner "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(542,"div",81),e.TgZ(543,"div",75),e.TgZ(544,"label",82),e._UZ(545,"input",83),e._UZ(546,"span",84),e._uU(547," Bike rent "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(548,"div",74),e.TgZ(549,"div",85),e._UZ(550,"input",86),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(551,"div",87),e.TgZ(552,"h5"),e._uU(553,"TRAVEL TIPS"),e.qZA(),e.TgZ(554,"h3"),e._uU(555,"NEED TRAVEL RELATED TIPS & INFORMATION"),e.qZA(),e.TgZ(556,"p"),e._uU(557,"Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. "),e.qZA(),e.TgZ(558,"a",88),e._uU(559,"GET A QUOTE"),e.qZA(),e.qZA(),e.TgZ(560,"div",89),e.TgZ(561,"h5"),e._uU(562,"MORE PACKAGES"),e.qZA(),e.TgZ(563,"h3"),e._uU(564,"OTHER TRAVEL PACKAGES"),e.qZA(),e.TgZ(565,"p"),e._uU(566,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus."),e.qZA(),e.TgZ(567,"ul"),e.TgZ(568,"li"),e.TgZ(569,"a",50),e._UZ(570,"i",90),e._uU(571,"Vacation packages"),e.qZA(),e.qZA(),e.TgZ(572,"li"),e.TgZ(573,"a",50),e._UZ(574,"i",90),e._uU(575,"Honeymoon packages"),e.qZA(),e.qZA(),e.TgZ(576,"li"),e.TgZ(577,"a",50),e._UZ(578,"i",90),e._uU(579,"New year packages"),e.qZA(),e.qZA(),e.TgZ(580,"li"),e.TgZ(581,"a",50),e._UZ(582,"i",90),e._uU(583,"Weekend packages"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(584,"section",91),e.TgZ(585,"div",2),e.TgZ(586,"div",7),e.TgZ(587,"div",92),e.TgZ(588,"div",93),e.TgZ(589,"h5",94),e._uU(590,"HOLIDAY PACKAGE OFFER"),e.qZA(),e.TgZ(591,"h2"),e._uU(592,"HOLIDAY SPECIAL 10% OFF !"),e.qZA(),e.TgZ(593,"h4"),e._uU(594,"Sign up now to recieve hot special offers and information about the best tour packages, updates and discounts !!"),e.qZA(),e.TgZ(595,"div",95),e.TgZ(596,"form"),e._UZ(597,"input",96),e._UZ(598,"input",97),e.qZA(),e.qZA(),e.TgZ(599,"p"),e._uU(600,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eaque adipiscing, luctus eleifend temporibus occaecat luctus eleifend tempo ribus."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(29),e.Q6J("ngClass",e.VKq(2,d,Z.sticky)),e.xp6(183),e.Q6J("config",Z.slideConfigPackage))},directives:[A.mk,g.vE,g.Xg],styles:[""],encapsulation:2}),a})()}];let q=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[T.Bz.forChild(c)],T.Bz]}),a})(),p=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[A.ez,q,g.Sv]]}),a})()}}]);