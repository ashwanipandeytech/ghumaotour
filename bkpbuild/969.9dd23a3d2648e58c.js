"use strict";(self.webpackChunkghumao=self.webpackChunkghumao||[]).push([[969],{2969:(m,u,s)=>{s.r(u),s.d(u,{Rajasthanpackage4Module:()=>q});var A=s(9808),T=s(8118),e=s(1223),l=s(1461);const d=function(a){return{sticky:a}},c=[{path:"",component:(()=>{class a{constructor(){this.slideConfigPackage={dots:!0,arrows:!1,infinite:!0,autoplay:!0,autoplaySpeed:2500,speed:2500,slidesToShow:2,slidesToScroll:1,pauseOnHover:!0,pauseOnFocus:!1,respondTo:"slider",adaptiveHeight:!0,responsive:[{breakpoint:767,settings:{slidesToShow:1}}]},this.sticky=!1,this.selector=[],setTimeout(()=>{window.scrollTo(0,0)},1e3)}ngOnInit(){}ngAfterViewInit(){this.initTopPosition=$("#myTab").offset().top;for(var Z,i=$(".tab li a"),t=[],n=0;n<i.length;n++){var g=$(i[n]).attr("href");t.push(g),Z=t.join(" , ")}console.log(Z),this.selector=t}handleScroll(i){if(this.stopScrollDetection)return!1;$(window).scrollTop()>this.initTopPosition?$("#myTab").addClass("sticky"):$("#myTab").removeClass("sticky");var t=$(window).scrollTop();this.selector.map(Z=>{var n=$(Z).position().top;if(t-n>270){var o=$(Z).attr("id");$(".tab li a").removeClass("active"),$('a[href="#'+o+'"]').addClass("active")}})}setActive(i){console.info(i),this.selector.map(t=>{var Z=$(t).attr("id");$(".tab li a").removeClass("active"),$('a[href="#'+Z+'"]').removeClass("active"),t!=i||(this.stopScrollDetection=!0,setTimeout(()=>{$('a[href="#'+i+'"]').addClass("active");let n=t.split("#")[1],o=document.getElementById(n);null!=o&&window.scroll({top:o.offsetTop+330,behavior:"smooth"}),this.stopScrollDetection=!1},100)),setTimeout(()=>{this.selector.map(n=>{n!=i?$(n+"-tab").removeClass("active"):$(i+"-tab").addClass("active")})},500)})}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-package"]],hostBindings:function(i,t){1&i&&e.NdJ("scroll",function(n){return t.handleScroll(n)},!1,e.Jf7)},decls:649,vars:4,consts:[[1,"inner-banner-wrap"],[1,"inner-baner-container",2,"background-image","url(assets/images/inner-banner.jpg)"],[1,"container"],[1,"inner-banner-content"],[1,"inner-title"],[1,"inner-shape"],[1,"single-tour-section"],[1,"row"],[1,"col-lg-8"],[1,"single-tour-inner"],[1,"text-uppercase"],[1,"feature-image"],["src","assets/images/img27.jpg","alt",""],[1,"package-meta","text-center"],[1,"far","fa-clock"],[1,"fas","fa-user-friends"],[1,"fas","fa-map-marked-alt"],[1,"tab-container"],["id","myTab","role","tablist",1,"nav","nav-tabs","tab",3,"ngClass"],[1,"nav-item",3,"click"],["id","program-tab","data-toggle","tab","href","#program","role","tab","aria-controls","program","aria-selected","false",1,"nav-link"],["id","inclusionexclusion-tab","data-toggle","tab","href","#inclusionexclusion","role","tab","aria-controls","program","aria-selected","false",1,"nav-link"],["id","review-tab","data-toggle","tab","href","#review","role","tab","aria-controls","review","aria-selected","false",1,"nav-link"],["id","map-tab","data-toggle","tab","href","#map","role","tab","aria-controls","map","aria-selected","false",1,"nav-link"],["id","myTabContent",1,"tab-content"],["id","program","role","tabpanel","aria-labelledby","program-tab",1,"tab-pane","show","active"],[1,"itinerary-content"],[1,"itinerary-timeline-wrap"],[1,"timeline-content"],[1,"day-count"],["id","inclusionexclusion","role","tabpanel","aria-labelledby","inclusionexclusion-tab",1,"tab-pane","show","active"],[1,"overview-content"],[1,"col-md-6"],["id","review","role","tabpanel","aria-labelledby","review-tab",1,"tab-pane","show","active"],[1,"summary-review"],[1,"review-score"],[1,"review-score-content"],[1,"comment-area"],[1,"comment-title"],[1,"comment-area-inner"],[1,"comment-thumb"],["src","assets/images/img20.jpg","alt",""],[1,"comment-content"],[1,"comment-header"],[1,"author-name"],[1,"post-on"],[1,"rating-wrap"],["title","Rated 5 out of 5",1,"rating-start"],[2,"width","90%"],["href","#",1,"reply"],[1,"fas","fa-reply"],["src","assets/images/img21.jpg","alt",""],["src","assets/images/img22.jpg","alt",""],[1,"comment-form-wrap"],[1,"comment-form"],[1,"full-width","rate-wrap"],[1,"procduct-rate"],["type","text","name","name","placeholder","Name"],["type","text","name","name","placeholder","Last name"],["type","email","name","email","placeholder","Email"],["type","text","name","subject","placeholder","Subject"],["rows","6","placeholder","Your review"],["type","submit","name","submit","value","Submit"],["id","map","role","tabpanel","aria-labelledby","map-tab",1,"tab-pane","show","active"],[1,"map-area"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60998820.06503915!2d95.3386452160086!3d-21.069765827214972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2snp!4v1579777829477!5m2!1sen!2snp","height","450","allowfullscreen",""],[1,"single-tour-gallery"],[1,"single-tour-slider","slick-initialized","slick-slider","slick-dotted"],[1,"row","package-slider","carousel",3,"config"],["slickModal","slick-carousel"],["ngxSlickItem","",1,"col-lg-6","col-md-6","col-sm-4","slide"],[1,"package-wrap"],["href","#"],["src","assets/images/img5.jpg","alt",""],[1,"package-price"],[1,"package-content-wrap"],[1,"fas","fa-map-marker-alt"],[1,"package-content"],[1,"review-area"],[1,"review-text"],[2,"width","60%"],[1,"innercontent"],[1,"btn-wrap"],["href","#",1,"button-text","width-6"],[1,"fas","fa-arrow-right"],["src","assets/images/img6.jpg","alt",""],["src","assets/images/img7.jpg","alt",""],["ngxSlickItem","",1,"col-lg-6col-md-6","col-sm-4","slide"],[1,"col-lg-4"],[1,"sidebar"],[1,"price"],[1,"start-wrap"],[1,"widget-bg","booking-form-wrap"],[1,"bg-title"],[1,"booking-form"],[1,"col-sm-12"],[1,"form-group"],["name","name_booking","type","text","placeholder","Full Name"],["name","email_booking","type","text","placeholder","Email"],["name","phone_booking","type","text","placeholder","Number"],["type","text","name","s","autocomplete","off","readonly","readonly","placeholder","Date","id","dp1652000334191",1,"input-date-picker","hasDatepicker"],[1,""],[1,"col-sm-6"],[1,"checkbox-list"],["type","checkbox","name","s"],[1,"custom-checkbox"],[1,"form-group","submit-btn"],["type","submit","name","submit","value","Boook Now"],[1,"widget-bg","information-content","text-center"],["href","#",1,"button-primary"],[1,"travel-package-content","text-center",2,"background-image","url(assets/images/img11.jpg)"],[1,"far","fa-arrow-alt-circle-right"],[1,"subscribe-section",2,"background-image","url(assets/images/img16.jpg)"],[1,"col-lg-7"],[1,"section-heading","section-heading-white"],[1,"dash-style"],[1,"newsletter-form"],["type","email","name","s","placeholder","Your Email Address"],["type","submit","name","signup","value","SIGN UP NOW!"]],template:function(i,t){1&i&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"h1",4),e._uU(5,"Package Detail"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(6,"div",5),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"div",2),e.TgZ(9,"div",7),e.TgZ(10,"div",8),e.TgZ(11,"div",9),e.TgZ(12,"h2",10),e._uU(13,"Rajasthan with Sand Dunes ( Ex \u2013 Jaipur)"),e.qZA(),e.TgZ(14,"figure",11),e._UZ(15,"img",12),e.TgZ(16,"div",13),e.TgZ(17,"ul"),e.TgZ(18,"li"),e._UZ(19,"i",14),e._uU(20," 10 Nights / 11 Days "),e.qZA(),e.TgZ(21,"li"),e._UZ(22,"i",15),e._uU(23," People: 4 "),e.qZA(),e.TgZ(24,"li"),e._UZ(25,"i",16),e._uU(26," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"div",17),e.TgZ(28,"ul",18),e.TgZ(29,"li",19),e.NdJ("click",function(){return t.setActive("#program")}),e.TgZ(30,"a",20),e._uU(31,"PROGRAM"),e.qZA(),e.qZA(),e.TgZ(32,"li",19),e.NdJ("click",function(){return t.setActive("#inclusionexclusion")}),e.TgZ(33,"a",21),e._uU(34,"INCLUSIONS/EXCLUSIONS"),e.qZA(),e.qZA(),e.TgZ(35,"li",19),e.NdJ("click",function(){return t.setActive("#review")}),e.TgZ(36,"a",22),e._uU(37,"REVIEW"),e.qZA(),e.qZA(),e.TgZ(38,"li",19),e.NdJ("click",function(){return t.setActive("#map")}),e.TgZ(39,"a",23),e._uU(40,"Map"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(41,"div",24),e.TgZ(42,"div",25),e.TgZ(43,"div",26),e.TgZ(44,"h3"),e._uU(45,"Program "),e.TgZ(46,"span"),e._uU(47,"( 11 days )"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(48,"div",27),e.TgZ(49,"ul"),e.TgZ(50,"li"),e.TgZ(51,"div",28),e.TgZ(52,"div",29),e._uU(53,"Day "),e.TgZ(54,"span"),e._uU(55,"1"),e.qZA(),e.qZA(),e.TgZ(56,"h4"),e._uU(57," Jaipur "),e.qZA(),e.TgZ(58,"p"),e._uU(59,"Arrival Jaipur Airport, Assistance and greet and then proceed to Hotel. Upon arrival , Check in to the Hotel . Later proceed to visit Amber Fort and enjoy an elephant ride here. Evening you can visit Birla Mandir and explore the attractive and colorful markets of Jaipur. Overnight stay at Jaipur. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(60,"li"),e.TgZ(61,"div",28),e.TgZ(62,"div",29),e._uU(63,"Day "),e.TgZ(64,"span"),e._uU(65,"2"),e.qZA(),e.qZA(),e.TgZ(66,"h4"),e._uU(67,"Jaipur - Ajmer - Pushkar "),e.qZA(),e.TgZ(68,"p"),e._uU(69,"After breakfast, visit City Palace, Albert Hall, Hawa Mahal, Jantar Mantar. Later, proceed to Ajmer (135 kms . / 3 hrs..), visit the famous Dargah of Salim Chisti and then drive to Pushkar (11 kms .), where you will visit the only Brahma Temple in India and Pushkar Lake. Overnight stay at Pushkar."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(70,"li"),e.TgZ(71,"div",28),e.TgZ(72,"div",29),e._uU(73,"Day "),e.TgZ(74,"span"),e._uU(75,"3"),e.qZA(),e.qZA(),e.TgZ(76,"h4"),e._uU(77,"Pushkar - Udaipur "),e.qZA(),e.TgZ(78,"p"),e._uU(79,"Morning drive to Udaipur (286 kms . / 6 hrs..). Upon arrival, check into hotel. Later visit the famous Jagdish temple which enshrines a black stone image of Lord Vishnu as Jagannath - Lord of the Universe, Jag Mandir and enjoy Boat ride at Pichola Lake . Overnight stay at Udaipur . "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(80,"li"),e.TgZ(81,"div",28),e.TgZ(82,"div",29),e._uU(83,"Day "),e.TgZ(84,"span"),e._uU(85,"4"),e.qZA(),e.qZA(),e.TgZ(86,"h4"),e._uU(87,"Udaipur"),e.qZA(),e.TgZ(88,"p"),e._uU(89,"After breakfast, visit City Palace , Crystal Hall , the Saheliyon ki bari - \u201cGardens of the Maidens\u201d and Sajjan Garh . Overnight stay at Udaipur . "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(90,"li"),e.TgZ(91,"div",28),e.TgZ(92,"div",29),e._uU(93,"Day "),e.TgZ(94,"span"),e._uU(95,"5"),e.qZA(),e.qZA(),e.TgZ(96,"h4"),e._uU(97,"Udaipur - Mount Abu"),e.qZA(),e.TgZ(98,"p"),e._uU(99,"Morning after breakfast , drive in amazing road trip of Mount Abu (190 kms . / 4.5 hrs.), Mount Abu is the only Hill Station in Rajasthan surrounding by Aravali Hills. Upon arrival, check into hotel. Enroute visit the magnificent Dilwara Jain Temples built in 11th century and then in evening enjoy the Sunset point and Nakki Lake where you can do boat ride. Overnight stay at Mount Abu. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(100,"li"),e.TgZ(101,"div",28),e.TgZ(102,"div",29),e._uU(103,"Day "),e.TgZ(104,"span"),e._uU(105,"6"),e.qZA(),e.qZA(),e.TgZ(106,"h4"),e._uU(107,"Mount Abu - Jodhpur "),e.qZA(),e.TgZ(108,"p"),e._uU(109,"After breakfast , depart to Jodhpur (325 kms . / 7 hrs..), the second largest city of Rajasthan.Jodhpur is also known \u201cblue city of Rajasthan\u201d . Upon arrival check into the hotel and then proceed for visiting Meharangarh Fort, Ummaid Bhawan Palace. Evening you can enjoy the famous sweets of Jodhpur in local market. Overnight stay at Jodhpur . "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(110,"li"),e.TgZ(111,"div",28),e.TgZ(112,"div",29),e._uU(113,"Day "),e.TgZ(114,"span"),e._uU(115,"7"),e.qZA(),e.qZA(),e.TgZ(116,"h4"),e._uU(117,"Jodhpur - Jaisalmer"),e.qZA(),e.TgZ(118,"p"),e._uU(119,"Post breakfast, Visit Museum in Jodhpur and then depart to Jaisalmer (290 kms ./ 7 hrs.). Arrival at Jaisalmer and transfer to hotel. Evening visit the local colourful market where you can feel you are in Rajasthan. Overnight stay at Jaisalmer. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(120,"li"),e.TgZ(121,"div",28),e.TgZ(122,"div",29),e._uU(123,"Day "),e.TgZ(124,"span"),e._uU(125,"8"),e.qZA(),e.qZA(),e.TgZ(126,"h4"),e._uU(127,"Jaisalmer Sand Dunes Visit "),e.qZA(),e.TgZ(128,"p"),e._uU(129,"In the morning, visit Jaisalmer Fort, the only fort in India which has a population of thousand people living within its walls. Later visit the amazing Havelis spread across Jaisalmer , which are reputed as the city\u2019s real show pieces. In the evening, visit the Sand Dunes to witness a spectacular Sunset over the Dunes and enjoy Kalbeliya Dance. Overnight stay at Jaisalmer in Camp. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(130,"li"),e.TgZ(131,"div",28),e.TgZ(132,"div",29),e._uU(133,"Day "),e.TgZ(134,"span"),e._uU(135,"9"),e.qZA(),e.qZA(),e.TgZ(136,"h4"),e._uU(137,"Jaisalmer - Bikaner "),e.qZA(),e.TgZ(138,"p"),e._uU(139,"This morning have early breakfast and proceed to Bikaner (332 kms . / 7 hrs.) Upon arrival, transfer to hotel. Later visit the magnificent Junagarh Fort. Unlike all the major Forts of Rajasthan which are on hilltops, the Junagarh Fort was built on the desert plains itself. Lastly, visit the National Camel Breeding Farm. Evening do not miss the visit to local market as Bikaner is very famous for Jadau Jewellary , Chat and Sweets . Overnight stay at Bikaner . "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(140,"li"),e.TgZ(141,"div",28),e.TgZ(142,"div",29),e._uU(143,"Day "),e.TgZ(144,"span"),e._uU(145,"10"),e.qZA(),e.qZA(),e.TgZ(146,"h4"),e._uU(147," Bikaner - Jaipur "),e.qZA(),e.TgZ(148,"p"),e._uU(149,"After breakfast, check out from hotel and proceed to Jaipur (351 kms./ 6.5 hrs. ) Upon arrival at Jaipur and departure. Tour Concludes with nice memories of Rajasthan. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(150,"div",30),e.TgZ(151,"div",31),e.TgZ(152,"div",7),e.TgZ(153,"div",32),e.TgZ(154,"h4"),e._uU(155," TOUR INCLUSIONS "),e.qZA(),e.TgZ(156,"ul"),e.TgZ(157,"li"),e._uU(158,"- 1 night accommodation in Jaipur."),e.qZA(),e.TgZ(159,"li"),e._uU(160,"- 1 night accommodation in Pushkar."),e.qZA(),e.TgZ(161,"li"),e._uU(162,"- 2 nights accommodation in Udaipur"),e.qZA(),e.TgZ(163,"li"),e._uU(164,"- 1 night accommodation in Mount Abu."),e.qZA(),e.TgZ(165,"li"),e._uU(166,"- 1 night accommodation in Jodhpur."),e.qZA(),e.TgZ(167,"li"),e._uU(168,"- 1 night accommodation in Jaisalmer Camp/ Hotel."),e.qZA(),e.TgZ(169,"li"),e._uU(170,"- 1 night accommodation in Bikaner."),e.qZA(),e.TgZ(171,"li"),e._uU(172,"- Assistance at the airport."),e.qZA(),e.TgZ(173,"li"),e._uU(174,"- Daily buffet breakfast in hotels."),e.qZA(),e.TgZ(175,"li"),e._uU(176,"- A/C vehicle for all transfers and sightseeing as per the itinerary."),e.qZA(),e.TgZ(177,"li"),e._uU(178,"- All applicable taxes."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(179,"div",32),e.TgZ(180,"h4"),e._uU(181," TOUR EXCLUSIONS "),e.qZA(),e.TgZ(182,"ul"),e.TgZ(183,"li"),e._uU(184,"- Any Air/ Train Tickets."),e.qZA(),e.TgZ(185,"li"),e._uU(186,"- Expenses of personal nature."),e.qZA(),e.TgZ(187,"li"),e._uU(188,"- All Entrances & Guide charges. "),e.qZA(),e.TgZ(189,"li"),e._uU(190,"- Boat Ride & Horse rides or Cable car or Ropeway on direct payment basis."),e.qZA(),e.TgZ(191,"li"),e._uU(192,"- Supplement for Special activities as per the itinerary. "),e.qZA(),e.TgZ(193,"li"),e._uU(194,"-Items of personal nature like laundry, phone calls, tips to guides / drivers etc. "),e.qZA(),e.TgZ(195,"li"),e._uU(196,"-Camera / Video camera fees applicable at monument. "),e.qZA(),e.TgZ(197,"li"),e._uU(198,"-5% Government GST. "),e.qZA(),e.TgZ(199,"li"),e._uU(200,"-Any other items/services not mentioned in \u201c Inclusions \u201c "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(201,"div",33),e.TgZ(202,"div",34),e.TgZ(203,"div",35),e.TgZ(204,"span"),e._uU(205,"4.9"),e.qZA(),e.qZA(),e.TgZ(206,"div",36),e.TgZ(207,"h3"),e._uU(208," Excellent "),e.TgZ(209,"span"),e._uU(210,"( Based on 24 reviews )"),e.qZA(),e.qZA(),e.TgZ(211,"p"),e._uU(212,"Tincidunt iaculis pede mus lobortis hendrerit eveniet impedit aenean mauris qui, pharetra rem doloremque laboris euismod deserunt non, cupiditate, vestibulum."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(213,"div",37),e.TgZ(214,"h3",38),e._uU(215,"3 Reviews"),e.qZA(),e.TgZ(216,"div",39),e.TgZ(217,"ol"),e.TgZ(218,"li"),e.TgZ(219,"figure",40),e._UZ(220,"img",41),e.qZA(),e.TgZ(221,"div",42),e.TgZ(222,"div",43),e.TgZ(223,"h5",44),e._uU(224,"Tom Sawyer"),e.qZA(),e.TgZ(225,"span",45),e._uU(226,"Jana 10 2020"),e.qZA(),e.TgZ(227,"div",46),e.TgZ(228,"div",47),e._UZ(229,"span",48),e.qZA(),e.qZA(),e.qZA(),e.TgZ(230,"p"),e._uU(231,"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor."),e.qZA(),e.TgZ(232,"a",49),e._UZ(233,"i",50),e._uU(234,"Reply"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(235,"li"),e.TgZ(236,"ol"),e.TgZ(237,"li"),e.TgZ(238,"figure",40),e._UZ(239,"img",51),e.qZA(),e.TgZ(240,"div",42),e.TgZ(241,"div",43),e.TgZ(242,"h5",44),e._uU(243,"John Doe"),e.qZA(),e.TgZ(244,"span",45),e._uU(245,"Jana 10 2020"),e.qZA(),e.TgZ(246,"div",46),e.TgZ(247,"div",47),e._UZ(248,"span",48),e.qZA(),e.qZA(),e.qZA(),e.TgZ(249,"p"),e._uU(250,"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor."),e.qZA(),e.TgZ(251,"a",49),e._UZ(252,"i",50),e._uU(253,"Reply"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(254,"ol"),e.TgZ(255,"li"),e.TgZ(256,"figure",40),e._UZ(257,"img",52),e.qZA(),e.TgZ(258,"div",42),e.TgZ(259,"div",43),e.TgZ(260,"h5",44),e._uU(261,"Jaan Smith"),e.qZA(),e.TgZ(262,"span",45),e._uU(263,"Jana 10 2020"),e.qZA(),e.TgZ(264,"div",46),e.TgZ(265,"div",47),e._UZ(266,"span"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(267,"p"),e._uU(268,"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor."),e.qZA(),e.TgZ(269,"a",49),e._UZ(270,"i",50),e._uU(271,"Reply"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(272,"div",53),e.TgZ(273,"h3",38),e._uU(274,"Leave a Review"),e.qZA(),e.TgZ(275,"form",54),e.TgZ(276,"div",55),e.TgZ(277,"label"),e._uU(278,"Your rating"),e.qZA(),e.TgZ(279,"div",56),e._UZ(280,"span"),e.qZA(),e.qZA(),e.TgZ(281,"p"),e._UZ(282,"input",57),e.qZA(),e.TgZ(283,"p"),e._UZ(284,"input",58),e.qZA(),e.TgZ(285,"p"),e._UZ(286,"input",59),e.qZA(),e.TgZ(287,"p"),e._UZ(288,"input",60),e.qZA(),e.TgZ(289,"p"),e._UZ(290,"textarea",61),e.qZA(),e.TgZ(291,"p"),e._UZ(292,"input",62),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(293,"div",63),e.TgZ(294,"div",64),e._UZ(295,"iframe",65),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(296,"div",66),e.TgZ(297,"h3"),e._uU(298,"GALLERY / PHOTOS"),e.qZA(),e.TgZ(299,"div",67),e.TgZ(300,"ngx-slick-carousel",68,69),e.TgZ(302,"div",70),e.TgZ(303,"div",71),e.TgZ(304,"figure",11),e.TgZ(305,"a",72),e._UZ(306,"img",73),e.qZA(),e.qZA(),e.TgZ(307,"div",74),e.TgZ(308,"h6"),e.TgZ(309,"span"),e._uU(310,"$1,900 "),e.qZA(),e._uU(311," / per person "),e.qZA(),e.qZA(),e.TgZ(312,"div",75),e.TgZ(313,"div",13),e.TgZ(314,"ul"),e.TgZ(315,"li"),e._UZ(316,"i",14),e._uU(317," 7N/8D "),e.qZA(),e.TgZ(318,"li"),e._UZ(319,"i",15),e._uU(320," People: 5 "),e.qZA(),e.TgZ(321,"li"),e._UZ(322,"i",76),e._uU(323," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(324,"div",77),e.TgZ(325,"h3"),e.TgZ(326,"a",72),e._uU(327,"Colourful Rajasthan"),e.qZA(),e.qZA(),e.TgZ(328,"div",78),e.TgZ(329,"span",79),e._uU(330,"(25 reviews)"),e.qZA(),e.TgZ(331,"div",47),e._UZ(332,"span",80),e.qZA(),e.qZA(),e.TgZ(333,"div",81),e.TgZ(334,"p"),e._uU(335,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(336,"div",82),e.TgZ(337,"a",83),e._uU(338,"Enquire Now"),e._UZ(339,"i",84),e.qZA(),e.TgZ(340,"a",83),e._uU(341,"Know More "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(342,"div",70),e.TgZ(343,"div",71),e.TgZ(344,"figure",11),e.TgZ(345,"a",72),e._UZ(346,"img",85),e.qZA(),e.qZA(),e.TgZ(347,"div",74),e.TgZ(348,"h6"),e.TgZ(349,"span"),e._uU(350,"$1,900 "),e.qZA(),e._uU(351," / per person "),e.qZA(),e.qZA(),e.TgZ(352,"div",75),e.TgZ(353,"div",13),e.TgZ(354,"ul"),e.TgZ(355,"li"),e._UZ(356,"i",14),e._uU(357," 7N/8D "),e.qZA(),e.TgZ(358,"li"),e._UZ(359,"i",15),e._uU(360," People: 5 "),e.qZA(),e.TgZ(361,"li"),e._UZ(362,"i",76),e._uU(363," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(364,"div",77),e.TgZ(365,"h3"),e.TgZ(366,"a",72),e._uU(367,"Amazing Rajasthan (EX \u2013Jaipur )"),e.qZA(),e.qZA(),e.TgZ(368,"div",78),e.TgZ(369,"span",79),e._uU(370,"(25 reviews)"),e.qZA(),e.TgZ(371,"div",47),e._UZ(372,"span",80),e.qZA(),e.qZA(),e.TgZ(373,"div",81),e.TgZ(374,"p"),e._uU(375,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(376,"div",82),e.TgZ(377,"a",83),e._uU(378,"Enquire Now"),e._UZ(379,"i",84),e.qZA(),e.TgZ(380,"a",83),e._uU(381,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(382,"div",70),e.TgZ(383,"div",71),e.TgZ(384,"figure",11),e.TgZ(385,"a",72),e._UZ(386,"img",86),e.qZA(),e.qZA(),e.TgZ(387,"div",74),e.TgZ(388,"h6"),e.TgZ(389,"span"),e._uU(390,"$1,900 "),e.qZA(),e._uU(391," / per person "),e.qZA(),e.qZA(),e.TgZ(392,"div",75),e.TgZ(393,"div",13),e.TgZ(394,"ul"),e.TgZ(395,"li"),e._UZ(396,"i",14),e._uU(397," 10N/11D "),e.qZA(),e.TgZ(398,"li"),e._UZ(399,"i",15),e._uU(400," People: 5 "),e.qZA(),e.TgZ(401,"li"),e._UZ(402,"i",76),e._uU(403," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(404,"div",77),e.TgZ(405,"h3"),e.TgZ(406,"a",72),e._uU(407,"Rangilo Rajasthan with Sand Dunes"),e.qZA(),e.qZA(),e.TgZ(408,"div",78),e.TgZ(409,"span",79),e._uU(410,"(25 reviews)"),e.qZA(),e.TgZ(411,"div",47),e._UZ(412,"span",80),e.qZA(),e.qZA(),e.TgZ(413,"div",81),e.TgZ(414,"p"),e._uU(415,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(416,"div",82),e.TgZ(417,"a",83),e._uU(418,"Enquire Now"),e._UZ(419,"i",84),e.qZA(),e.TgZ(420,"a",83),e._uU(421,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(422,"div",70),e.TgZ(423,"div",71),e.TgZ(424,"figure",11),e.TgZ(425,"a",72),e._UZ(426,"img",73),e.qZA(),e.qZA(),e.TgZ(427,"div",74),e.TgZ(428,"h6"),e.TgZ(429,"span"),e._uU(430,"$1,900 "),e.qZA(),e._uU(431," / per person "),e.qZA(),e.qZA(),e.TgZ(432,"div",75),e.TgZ(433,"div",13),e.TgZ(434,"ul"),e.TgZ(435,"li"),e._UZ(436,"i",14),e._uU(437," 7N/8D "),e.qZA(),e.TgZ(438,"li"),e._UZ(439,"i",15),e._uU(440," People: 5 "),e.qZA(),e.TgZ(441,"li"),e._UZ(442,"i",76),e._uU(443," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(444,"div",77),e.TgZ(445,"h3"),e.TgZ(446,"a",72),e._uU(447,"Golden Triangle tour with Ajmer & Pushkar"),e.qZA(),e.qZA(),e.TgZ(448,"div",78),e.TgZ(449,"span",79),e._uU(450,"(25 reviews)"),e.qZA(),e.TgZ(451,"div",47),e._UZ(452,"span",80),e.qZA(),e.qZA(),e.TgZ(453,"div",81),e.TgZ(454,"p"),e._uU(455,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(456,"div",82),e.TgZ(457,"a",83),e._uU(458,"Enquire Now"),e._UZ(459,"i",84),e.qZA(),e.TgZ(460,"a",83),e._uU(461,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(462,"div",70),e.TgZ(463,"div",71),e.TgZ(464,"figure",11),e.TgZ(465,"a",72),e._UZ(466,"img",85),e.qZA(),e.qZA(),e.TgZ(467,"div",74),e.TgZ(468,"h6"),e.TgZ(469,"span"),e._uU(470,"$1,900 "),e.qZA(),e._uU(471," / per person "),e.qZA(),e.qZA(),e.TgZ(472,"div",75),e.TgZ(473,"div",13),e.TgZ(474,"ul"),e.TgZ(475,"li"),e._UZ(476,"i",14),e._uU(477," 7N/8D "),e.qZA(),e.TgZ(478,"li"),e._UZ(479,"i",15),e._uU(480," People: 5 "),e.qZA(),e.TgZ(481,"li"),e._UZ(482,"i",76),e._uU(483," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(484,"div",77),e.TgZ(485,"h3"),e.TgZ(486,"a",72),e._uU(487,"Golden Triangle tour with Ranthambore Jungle Safari"),e.qZA(),e.qZA(),e.TgZ(488,"div",78),e.TgZ(489,"span",79),e._uU(490,"(25 reviews)"),e.qZA(),e.TgZ(491,"div",47),e._UZ(492,"span",80),e.qZA(),e.qZA(),e.TgZ(493,"div",81),e.TgZ(494,"p"),e._uU(495,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(496,"div",82),e.TgZ(497,"a",83),e._uU(498,"Enquire Now"),e._UZ(499,"i",84),e.qZA(),e.TgZ(500,"a",83),e._uU(501,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(502,"div",87),e.TgZ(503,"div",71),e.TgZ(504,"figure",11),e.TgZ(505,"a",72),e._UZ(506,"img",86),e.qZA(),e.qZA(),e.TgZ(507,"div",74),e.TgZ(508,"h6"),e.TgZ(509,"span"),e._uU(510,"$1,900 "),e.qZA(),e._uU(511," / per person "),e.qZA(),e.qZA(),e.TgZ(512,"div",75),e.TgZ(513,"div",13),e.TgZ(514,"ul"),e.TgZ(515,"li"),e._UZ(516,"i",14),e._uU(517," 3N/4D "),e.qZA(),e.TgZ(518,"li"),e._UZ(519,"i",15),e._uU(520," People: 5 "),e.qZA(),e.TgZ(521,"li"),e._UZ(522,"i",76),e._uU(523," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(524,"div",77),e.TgZ(525,"h3"),e.TgZ(526,"a",72),e._uU(527,"Beautiful Udaipur with Mount Abu ( EX \u2013Udaipur)"),e.qZA(),e.qZA(),e.TgZ(528,"div",78),e.TgZ(529,"span",79),e._uU(530,"(25 reviews)"),e.qZA(),e.TgZ(531,"div",47),e._UZ(532,"span",80),e.qZA(),e.qZA(),e.TgZ(533,"div",81),e.TgZ(534,"p"),e._uU(535,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(536,"div",82),e.TgZ(537,"a",83),e._uU(538,"Enquire Now"),e._UZ(539,"i",84),e.qZA(),e.TgZ(540,"a",83),e._uU(541,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(542,"div",88),e.TgZ(543,"div",89),e.TgZ(544,"div",74),e.TgZ(545,"h5",90),e.TgZ(546,"span"),e._uU(547,"$649"),e.qZA(),e._uU(548," / per person "),e.qZA(),e.TgZ(549,"div",91),e.TgZ(550,"div",47),e._UZ(551,"span",80),e.qZA(),e.qZA(),e.qZA(),e.TgZ(552,"div",92),e.TgZ(553,"h4",93),e._uU(554,"Booking"),e.qZA(),e.TgZ(555,"form",94),e.TgZ(556,"div",7),e.TgZ(557,"div",95),e.TgZ(558,"div",96),e._UZ(559,"input",97),e.qZA(),e.qZA(),e.TgZ(560,"div",95),e.TgZ(561,"div",96),e._UZ(562,"input",98),e.qZA(),e.qZA(),e.TgZ(563,"div",95),e.TgZ(564,"div",96),e._UZ(565,"input",99),e.qZA(),e.qZA(),e.TgZ(566,"div",95),e.TgZ(567,"div",96),e._UZ(568,"input",100),e.qZA(),e.qZA(),e.TgZ(569,"div",95),e.TgZ(570,"h4",101),e._uU(571,"Add Options"),e.qZA(),e.qZA(),e.TgZ(572,"div",102),e.TgZ(573,"div",96),e.TgZ(574,"label",103),e._UZ(575,"input",104),e._UZ(576,"span",105),e._uU(577," Tour guide "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(578,"div",102),e.TgZ(579,"div",96),e.TgZ(580,"label",103),e._UZ(581,"input",104),e._UZ(582,"span",105),e._uU(583," Insurance "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(584,"div",102),e.TgZ(585,"div",96),e.TgZ(586,"label",103),e._UZ(587,"input",104),e._UZ(588,"span",105),e._uU(589," Dinner "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(590,"div",102),e.TgZ(591,"div",96),e.TgZ(592,"label",103),e._UZ(593,"input",104),e._UZ(594,"span",105),e._uU(595," Bike rent "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(596,"div",95),e.TgZ(597,"div",106),e._UZ(598,"input",107),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(599,"div",108),e.TgZ(600,"h5"),e._uU(601,"TRAVEL TIPS"),e.qZA(),e.TgZ(602,"h3"),e._uU(603,"NEED TRAVEL RELATED TIPS & INFORMATION"),e.qZA(),e.TgZ(604,"p"),e._uU(605,"Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. "),e.qZA(),e.TgZ(606,"a",109),e._uU(607,"GET A QUOTE"),e.qZA(),e.qZA(),e.TgZ(608,"div",110),e.TgZ(609,"h5"),e._uU(610,"MORE PACKAGES"),e.qZA(),e.TgZ(611,"h3"),e._uU(612,"OTHER TRAVEL PACKAGES"),e.qZA(),e.TgZ(613,"p"),e._uU(614,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus."),e.qZA(),e.TgZ(615,"ul"),e.TgZ(616,"li"),e.TgZ(617,"a",72),e._UZ(618,"i",111),e._uU(619,"Vacation packages"),e.qZA(),e.qZA(),e.TgZ(620,"li"),e.TgZ(621,"a",72),e._UZ(622,"i",111),e._uU(623,"Honeymoon packages"),e.qZA(),e.qZA(),e.TgZ(624,"li"),e.TgZ(625,"a",72),e._UZ(626,"i",111),e._uU(627,"New year packages"),e.qZA(),e.qZA(),e.TgZ(628,"li"),e.TgZ(629,"a",72),e._UZ(630,"i",111),e._uU(631,"Weekend packages"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(632,"section",112),e.TgZ(633,"div",2),e.TgZ(634,"div",7),e.TgZ(635,"div",113),e.TgZ(636,"div",114),e.TgZ(637,"h5",115),e._uU(638,"HOLIDAY PACKAGE OFFER"),e.qZA(),e.TgZ(639,"h2"),e._uU(640,"HOLIDAY SPECIAL 10% OFF !"),e.qZA(),e.TgZ(641,"h4"),e._uU(642,"Sign up now to recieve hot special offers and information about the best tour packages, updates and discounts !!"),e.qZA(),e.TgZ(643,"div",116),e.TgZ(644,"form"),e._UZ(645,"input",117),e._UZ(646,"input",118),e.qZA(),e.qZA(),e.TgZ(647,"p"),e._uU(648,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eaque adipiscing, luctus eleifend temporibus occaecat luctus eleifend tempo ribus."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(28),e.Q6J("ngClass",e.VKq(2,d,t.sticky)),e.xp6(272),e.Q6J("config",t.slideConfigPackage))},directives:[A.mk,l.vE,l.Xg],styles:[""]}),a})()}];let p=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[T.Bz.forChild(c)],T.Bz]}),a})(),q=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[A.ez,p,l.Sv]]}),a})()}}]);