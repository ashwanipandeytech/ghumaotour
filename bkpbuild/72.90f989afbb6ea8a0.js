"use strict";(self.webpackChunkghumao=self.webpackChunkghumao||[]).push([[72],{2072:(m,u,g)=>{g.r(u),g.d(u,{Rajasthanpackage6Module:()=>p});var A=g(9808),T=g(8118),e=g(1223),o=g(1461);const q=function(a){return{sticky:a}},c=[{path:"",component:(()=>{class a{constructor(){this.slideConfigPackage={dots:!0,arrows:!1,infinite:!0,autoplay:!0,autoplaySpeed:2500,speed:2500,slidesToShow:2,slidesToScroll:1,pauseOnHover:!0,pauseOnFocus:!1,respondTo:"slider",adaptiveHeight:!0,responsive:[{breakpoint:767,settings:{slidesToShow:1}}]},this.sticky=!1,this.selector=[],setTimeout(()=>{window.scrollTo(0,0)},1e3)}ngOnInit(){}ngAfterViewInit(){this.initTopPosition=$("#myTab").offset().top;for(var t,i=$(".tab li a"),Z=[],n=0;n<i.length;n++){var s=$(i[n]).attr("href");Z.push(s),t=Z.join(" , ")}console.log(t),this.selector=Z}handleScroll(i){if(this.stopScrollDetection)return!1;$(window).scrollTop()>this.initTopPosition?$("#myTab").addClass("sticky"):$("#myTab").removeClass("sticky");var Z=$(window).scrollTop();this.selector.map(t=>{var n=$(t).position().top;if(Z-n>270){var l=$(t).attr("id");$(".tab li a").removeClass("active"),$('a[href="#'+l+'"]').addClass("active")}})}setActive(i){console.info(i),this.selector.map(Z=>{var t=$(Z).attr("id");$(".tab li a").removeClass("active"),$('a[href="#'+t+'"]').removeClass("active"),Z!=i||(this.stopScrollDetection=!0,setTimeout(()=>{$('a[href="#'+i+'"]').addClass("active");let n=Z.split("#")[1],l=document.getElementById(n);null!=l&&window.scroll({top:l.offsetTop+330,behavior:"smooth"}),this.stopScrollDetection=!1},100)),setTimeout(()=>{this.selector.map(n=>{n!=i?$(n+"-tab").removeClass("active"):$(i+"-tab").addClass("active")})},500)})}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-package"]],hostBindings:function(i,Z){1&i&&e.NdJ("scroll",function(n){return Z.handleScroll(n)},!1,e.Jf7)},decls:604,vars:4,consts:[[1,"inner-banner-wrap"],[1,"inner-baner-container",2,"background-image","url(assets/images/inner-banner.jpg)"],[1,"container"],[1,"inner-banner-content"],[1,"inner-title"],[1,"inner-shape"],[1,"single-tour-section"],[1,"row"],[1,"col-lg-8"],[1,"single-tour-inner"],[1,"text-uppercase"],[1,"feature-image"],["src","assets/images/img27.jpg","alt",""],[1,"package-meta","text-center"],[1,"far","fa-clock"],[1,"fas","fa-user-friends"],[1,"fas","fa-map-marked-alt"],[1,"tab-container"],["id","myTab","role","tablist",1,"nav","nav-tabs","tab",3,"ngClass"],[1,"nav-item",3,"click"],["id","program-tab","data-toggle","tab","href","#program","role","tab","aria-controls","program","aria-selected","false",1,"nav-link"],["id","inclusionexclusion-tab","data-toggle","tab","href","#inclusionexclusion","role","tab","aria-controls","program","aria-selected","false",1,"nav-link"],["id","review-tab","data-toggle","tab","href","#review","role","tab","aria-controls","review","aria-selected","false",1,"nav-link"],["id","map-tab","data-toggle","tab","href","#map","role","tab","aria-controls","map","aria-selected","false",1,"nav-link"],["id","myTabContent",1,"tab-content"],["id","program","role","tabpanel","aria-labelledby","program-tab",1,"tab-pane","show","active"],[1,"itinerary-content"],[1,"itinerary-timeline-wrap"],[1,"timeline-content"],[1,"day-count"],["id","inclusionexclusion","role","tabpanel","aria-labelledby","inclusionexclusion-tab",1,"tab-pane","show","active"],[1,"overview-content"],[1,"col-md-6"],["id","review","role","tabpanel","aria-labelledby","review-tab",1,"tab-pane","show","active"],[1,"summary-review"],[1,"review-score"],[1,"review-score-content"],[1,"comment-area"],[1,"comment-title"],[1,"comment-area-inner"],[1,"comment-thumb"],["src","assets/images/img20.jpg","alt",""],[1,"comment-content"],[1,"comment-header"],[1,"author-name"],[1,"post-on"],[1,"rating-wrap"],["title","Rated 5 out of 5",1,"rating-start"],[2,"width","90%"],["href","#",1,"reply"],[1,"fas","fa-reply"],["src","assets/images/img21.jpg","alt",""],["src","assets/images/img22.jpg","alt",""],[1,"comment-form-wrap"],[1,"comment-form"],[1,"full-width","rate-wrap"],[1,"procduct-rate"],["type","text","name","name","placeholder","Name"],["type","text","name","name","placeholder","Last name"],["type","email","name","email","placeholder","Email"],["type","text","name","subject","placeholder","Subject"],["rows","6","placeholder","Your review"],["type","submit","name","submit","value","Submit"],["id","map","role","tabpanel","aria-labelledby","map-tab",1,"tab-pane","show","active"],[1,"map-area"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60998820.06503915!2d95.3386452160086!3d-21.069765827214972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2snp!4v1579777829477!5m2!1sen!2snp","height","450","allowfullscreen",""],[1,"single-tour-gallery"],[1,"single-tour-slider","slick-initialized","slick-slider","slick-dotted"],[1,"row","package-slider","carousel",3,"config"],["slickModal","slick-carousel"],["ngxSlickItem","",1,"col-lg-6","col-md-6","col-sm-4","slide"],[1,"package-wrap"],["href","#"],["src","assets/images/img5.jpg","alt",""],[1,"package-price"],[1,"package-content-wrap"],[1,"fas","fa-map-marker-alt"],[1,"package-content"],[1,"review-area"],[1,"review-text"],[2,"width","60%"],[1,"innercontent"],[1,"btn-wrap"],["href","#",1,"button-text","width-6"],[1,"fas","fa-arrow-right"],["src","assets/images/img6.jpg","alt",""],["src","assets/images/img7.jpg","alt",""],["ngxSlickItem","",1,"col-lg-6col-md-6","col-sm-4","slide"],[1,"col-lg-4"],[1,"sidebar"],[1,"price"],[1,"start-wrap"],[1,"widget-bg","booking-form-wrap"],[1,"bg-title"],[1,"booking-form"],[1,"col-sm-12"],[1,"form-group"],["name","name_booking","type","text","placeholder","Full Name"],["name","email_booking","type","text","placeholder","Email"],["name","phone_booking","type","text","placeholder","Number"],["type","text","name","s","autocomplete","off","readonly","readonly","placeholder","Date","id","dp1652000334191",1,"input-date-picker","hasDatepicker"],[1,""],[1,"col-sm-6"],[1,"checkbox-list"],["type","checkbox","name","s"],[1,"custom-checkbox"],[1,"form-group","submit-btn"],["type","submit","name","submit","value","Boook Now"],[1,"widget-bg","information-content","text-center"],["href","#",1,"button-primary"],[1,"travel-package-content","text-center",2,"background-image","url(assets/images/img11.jpg)"],[1,"far","fa-arrow-alt-circle-right"],[1,"subscribe-section",2,"background-image","url(assets/images/img16.jpg)"],[1,"col-lg-7"],[1,"section-heading","section-heading-white"],[1,"dash-style"],[1,"newsletter-form"],["type","email","name","s","placeholder","Your Email Address"],["type","submit","name","signup","value","SIGN UP NOW!"]],template:function(i,Z){1&i&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"h1",4),e._uU(5,"Package Detail"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(6,"div",5),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"div",2),e.TgZ(9,"div",7),e.TgZ(10,"div",8),e.TgZ(11,"div",9),e.TgZ(12,"h2",10),e._uU(13," Golden Triangle tour with Ranthambore Jungle Safari "),e.qZA(),e.TgZ(14,"figure",11),e._UZ(15,"img",12),e.TgZ(16,"div",13),e.TgZ(17,"ul"),e.TgZ(18,"li"),e._UZ(19,"i",14),e._uU(20," 5 Nights / 6 Days "),e.qZA(),e.TgZ(21,"li"),e._UZ(22,"i",15),e._uU(23," People: 4 "),e.qZA(),e.TgZ(24,"li"),e._UZ(25,"i",16),e._uU(26," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"div",17),e.TgZ(28,"ul",18),e.TgZ(29,"li",19),e.NdJ("click",function(){return Z.setActive("#program")}),e.TgZ(30,"a",20),e._uU(31,"PROGRAM"),e.qZA(),e.qZA(),e.TgZ(32,"li",19),e.NdJ("click",function(){return Z.setActive("#inclusionexclusion")}),e.TgZ(33,"a",21),e._uU(34,"INCLUSIONS/EXCLUSIONS"),e.qZA(),e.qZA(),e.TgZ(35,"li",19),e.NdJ("click",function(){return Z.setActive("#review")}),e.TgZ(36,"a",22),e._uU(37,"REVIEW"),e.qZA(),e.qZA(),e.TgZ(38,"li",19),e.NdJ("click",function(){return Z.setActive("#map")}),e.TgZ(39,"a",23),e._uU(40,"Map"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(41,"div",24),e.TgZ(42,"div",25),e.TgZ(43,"div",26),e.TgZ(44,"h3"),e._uU(45,"Program "),e.TgZ(46,"span"),e._uU(47,"( 6 days )"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(48,"div",27),e.TgZ(49,"ul"),e.TgZ(50,"li"),e.TgZ(51,"div",28),e.TgZ(52,"div",29),e._uU(53,"Day "),e.TgZ(54,"span"),e._uU(55,"1"),e.qZA(),e.qZA(),e.TgZ(56,"h4"),e._uU(57,"Delhi \u2013 Vrindavan \u2013Mathura -Agra "),e.qZA(),e.TgZ(58,"p"),e._uU(59,"Morning drive to Agra ( 235 Kms / 5 hrs) en-route visit Vrindavan \u201c the famous Bankey Bihari Temple , Prem Mandir and then proceed to Mathura, visit Krishna Janmabhumi and then proceed to Agra . On arrival transfer to Hotel. Overnight stay at Agra. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(60,"li"),e.TgZ(61,"div",28),e.TgZ(62,"div",29),e._uU(63,"Day "),e.TgZ(64,"span"),e._uU(65,"2"),e.qZA(),e.qZA(),e.TgZ(66,"h4"),e._uU(67,"Agra "),e.qZA(),e.TgZ(68,"p"),e._uU(69,"After breakfast , proceed for sightseeing of Agra visiting Taj Mahal, one of the 7th wonders of the world, Sikandara Fort and Agra Fort. Evening visit local Market .Overnight stay at Agra. (Taj Mahal closed on every Friday). . "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(70,"li"),e.TgZ(71,"div",28),e.TgZ(72,"div",29),e._uU(73,"Day "),e.TgZ(74,"span"),e._uU(75,"3"),e.qZA(),e.qZA(),e.TgZ(76,"h4"),e._uU(77,"Agra - Fatehpur Sikri - Ranthambore "),e.qZA(),e.TgZ(78,"p"),e._uU(79,"Morning drive to Ranthambore (240 kms / 4 hrs. ). Enroute visit Fatehpur Sikri. Ranthambore National Park, one of the most eminent wild life parks. It is consider as one of the best places in the country to see the Bengal Tiger.On arrival transfer to Hotel. Overnight stay at Ranthambore. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(80,"li"),e.TgZ(81,"div",28),e.TgZ(82,"div",29),e._uU(83,"Day "),e.TgZ(84,"span"),e._uU(85,"4"),e.qZA(),e.qZA(),e.TgZ(86,"h4"),e._uU(87,"Ranthambhore - Jaipur"),e.qZA(),e.TgZ(88,"p"),e._uU(89,"Morning visit safari at Ranthambhore (07:00 hrs.. - 10:00 hrs..). Later drive to Jaipur ( 190 kms / 4 hrs. drive). On arrival transfer to Hotel. Evening free for shopping. Overnight stay. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(90,"li"),e.TgZ(91,"div",28),e.TgZ(92,"div",29),e._uU(93,"Day "),e.TgZ(94,"span"),e._uU(95,"5"),e.qZA(),e.qZA(),e.TgZ(96,"h4"),e._uU(97,"Jaipur"),e.qZA(),e.TgZ(98,"p"),e._uU(99,"Morning after breakfast , proceed to Amer Fort and here you can enjoy Elephant / Jeep ride . Later proceed for Jaipur sightseeing , visit City Palace, Albert Hall , Jantar Mantar - the Royal Observatory and Hawa Mahal (drive through). Overnight stay at Jaipur. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(100,"li"),e.TgZ(101,"div",28),e.TgZ(102,"div",29),e._uU(103,"Day "),e.TgZ(104,"span"),e._uU(105,"6"),e.qZA(),e.qZA(),e.TgZ(106,"h4"),e._uU(107,"Jaipur - Delhi "),e.qZA(),e.TgZ(108,"p"),e._uU(109,"Morning drive back to Delhi (265 kms / 5 hrs. ). Tour Concludes. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(110,"br"),e.TgZ(111,"i"),e._uU(112," Note : Ranthambore wild life Sanctuary will remain closed from July to September."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(113,"div",30),e.TgZ(114,"div",31),e.TgZ(115,"div",7),e.TgZ(116,"div",32),e.TgZ(117,"h4"),e._uU(118," TOUR INCLUSIONS "),e.qZA(),e.TgZ(119,"ul"),e.TgZ(120,"li"),e._uU(121,"- 2 night accommodation in Agra.."),e.qZA(),e.TgZ(122,"li"),e._uU(123,"- 1 night accommodation in Ranthambore."),e.qZA(),e.TgZ(124,"li"),e._uU(125,"- 2 nights accommodation in Jaipur. "),e.qZA(),e.TgZ(126,"li"),e._uU(127,"- Assistance at the airport."),e.qZA(),e.TgZ(128,"li"),e._uU(129,"- Daily buffet breakfast in hotels."),e.qZA(),e.TgZ(130,"li"),e._uU(131,"- A/C vehicle for all transfers and sightseeing as per the itinerary."),e.qZA(),e.TgZ(132,"li"),e._uU(133,"- All applicable Hotel taxes."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(134,"div",32),e.TgZ(135,"h4"),e._uU(136," TOUR EXCLUSIONS "),e.qZA(),e.TgZ(137,"ul"),e.TgZ(138,"li"),e._uU(139,"- Any Air/ Train Tickets."),e.qZA(),e.TgZ(140,"li"),e._uU(141,"- Expenses of personal nature."),e.qZA(),e.TgZ(142,"li"),e._uU(143,"- All Entrances & Guide charges. "),e.qZA(),e.TgZ(144,"li"),e._uU(145,"- Boat Ride & Horse rides or Cable car or Ropeway on direct payment basis."),e.qZA(),e.TgZ(146,"li"),e._uU(147,"- Supplement for Special activities as per the itinerary. "),e.qZA(),e.TgZ(148,"li"),e._uU(149,"-Items of personal nature like laundry, phone calls, tips to guides / drivers etc. "),e.qZA(),e.TgZ(150,"li"),e._uU(151,"-Camera / Video camera fees applicable at monument. "),e.qZA(),e.TgZ(152,"li"),e._uU(153,"-5% Government GST. "),e.qZA(),e.TgZ(154,"li"),e._uU(155,"-Any other items/services not mentioned in \u201c Inclusions \u201c "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(156,"div",33),e.TgZ(157,"div",34),e.TgZ(158,"div",35),e.TgZ(159,"span"),e._uU(160,"4.9"),e.qZA(),e.qZA(),e.TgZ(161,"div",36),e.TgZ(162,"h3"),e._uU(163," Excellent "),e.TgZ(164,"span"),e._uU(165,"( Based on 24 reviews )"),e.qZA(),e.qZA(),e.TgZ(166,"p"),e._uU(167,"Tincidunt iaculis pede mus lobortis hendrerit eveniet impedit aenean mauris qui, pharetra rem doloremque laboris euismod deserunt non, cupiditate, vestibulum."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(168,"div",37),e.TgZ(169,"h3",38),e._uU(170,"3 Reviews"),e.qZA(),e.TgZ(171,"div",39),e.TgZ(172,"ol"),e.TgZ(173,"li"),e.TgZ(174,"figure",40),e._UZ(175,"img",41),e.qZA(),e.TgZ(176,"div",42),e.TgZ(177,"div",43),e.TgZ(178,"h5",44),e._uU(179,"Tom Sawyer"),e.qZA(),e.TgZ(180,"span",45),e._uU(181,"Jana 10 2020"),e.qZA(),e.TgZ(182,"div",46),e.TgZ(183,"div",47),e._UZ(184,"span",48),e.qZA(),e.qZA(),e.qZA(),e.TgZ(185,"p"),e._uU(186,"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor."),e.qZA(),e.TgZ(187,"a",49),e._UZ(188,"i",50),e._uU(189,"Reply"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(190,"li"),e.TgZ(191,"ol"),e.TgZ(192,"li"),e.TgZ(193,"figure",40),e._UZ(194,"img",51),e.qZA(),e.TgZ(195,"div",42),e.TgZ(196,"div",43),e.TgZ(197,"h5",44),e._uU(198,"John Doe"),e.qZA(),e.TgZ(199,"span",45),e._uU(200,"Jana 10 2020"),e.qZA(),e.TgZ(201,"div",46),e.TgZ(202,"div",47),e._UZ(203,"span",48),e.qZA(),e.qZA(),e.qZA(),e.TgZ(204,"p"),e._uU(205,"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor."),e.qZA(),e.TgZ(206,"a",49),e._UZ(207,"i",50),e._uU(208,"Reply"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(209,"ol"),e.TgZ(210,"li"),e.TgZ(211,"figure",40),e._UZ(212,"img",52),e.qZA(),e.TgZ(213,"div",42),e.TgZ(214,"div",43),e.TgZ(215,"h5",44),e._uU(216,"Jaan Smith"),e.qZA(),e.TgZ(217,"span",45),e._uU(218,"Jana 10 2020"),e.qZA(),e.TgZ(219,"div",46),e.TgZ(220,"div",47),e._UZ(221,"span"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(222,"p"),e._uU(223,"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor."),e.qZA(),e.TgZ(224,"a",49),e._UZ(225,"i",50),e._uU(226,"Reply"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(227,"div",53),e.TgZ(228,"h3",38),e._uU(229,"Leave a Review"),e.qZA(),e.TgZ(230,"form",54),e.TgZ(231,"div",55),e.TgZ(232,"label"),e._uU(233,"Your rating"),e.qZA(),e.TgZ(234,"div",56),e._UZ(235,"span"),e.qZA(),e.qZA(),e.TgZ(236,"p"),e._UZ(237,"input",57),e.qZA(),e.TgZ(238,"p"),e._UZ(239,"input",58),e.qZA(),e.TgZ(240,"p"),e._UZ(241,"input",59),e.qZA(),e.TgZ(242,"p"),e._UZ(243,"input",60),e.qZA(),e.TgZ(244,"p"),e._UZ(245,"textarea",61),e.qZA(),e.TgZ(246,"p"),e._UZ(247,"input",62),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(248,"div",63),e.TgZ(249,"div",64),e._UZ(250,"iframe",65),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(251,"div",66),e.TgZ(252,"h3"),e._uU(253,"GALLERY / PHOTOS"),e.qZA(),e.TgZ(254,"div",67),e.TgZ(255,"ngx-slick-carousel",68,69),e.TgZ(257,"div",70),e.TgZ(258,"div",71),e.TgZ(259,"figure",11),e.TgZ(260,"a",72),e._UZ(261,"img",73),e.qZA(),e.qZA(),e.TgZ(262,"div",74),e.TgZ(263,"h6"),e.TgZ(264,"span"),e._uU(265,"$1,900 "),e.qZA(),e._uU(266," / per person "),e.qZA(),e.qZA(),e.TgZ(267,"div",75),e.TgZ(268,"div",13),e.TgZ(269,"ul"),e.TgZ(270,"li"),e._UZ(271,"i",14),e._uU(272," 7N/8D "),e.qZA(),e.TgZ(273,"li"),e._UZ(274,"i",15),e._uU(275," People: 5 "),e.qZA(),e.TgZ(276,"li"),e._UZ(277,"i",76),e._uU(278," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(279,"div",77),e.TgZ(280,"h3"),e.TgZ(281,"a",72),e._uU(282,"Colourful Rajasthan"),e.qZA(),e.qZA(),e.TgZ(283,"div",78),e.TgZ(284,"span",79),e._uU(285,"(25 reviews)"),e.qZA(),e.TgZ(286,"div",47),e._UZ(287,"span",80),e.qZA(),e.qZA(),e.TgZ(288,"div",81),e.TgZ(289,"p"),e._uU(290,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(291,"div",82),e.TgZ(292,"a",83),e._uU(293,"Enquire Now"),e._UZ(294,"i",84),e.qZA(),e.TgZ(295,"a",83),e._uU(296,"Know More "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(297,"div",70),e.TgZ(298,"div",71),e.TgZ(299,"figure",11),e.TgZ(300,"a",72),e._UZ(301,"img",85),e.qZA(),e.qZA(),e.TgZ(302,"div",74),e.TgZ(303,"h6"),e.TgZ(304,"span"),e._uU(305,"$1,900 "),e.qZA(),e._uU(306," / per person "),e.qZA(),e.qZA(),e.TgZ(307,"div",75),e.TgZ(308,"div",13),e.TgZ(309,"ul"),e.TgZ(310,"li"),e._UZ(311,"i",14),e._uU(312," 7N/8D "),e.qZA(),e.TgZ(313,"li"),e._UZ(314,"i",15),e._uU(315," People: 5 "),e.qZA(),e.TgZ(316,"li"),e._UZ(317,"i",76),e._uU(318," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(319,"div",77),e.TgZ(320,"h3"),e.TgZ(321,"a",72),e._uU(322,"Amazing Rajasthan (EX \u2013Jaipur )"),e.qZA(),e.qZA(),e.TgZ(323,"div",78),e.TgZ(324,"span",79),e._uU(325,"(25 reviews)"),e.qZA(),e.TgZ(326,"div",47),e._UZ(327,"span",80),e.qZA(),e.qZA(),e.TgZ(328,"div",81),e.TgZ(329,"p"),e._uU(330,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(331,"div",82),e.TgZ(332,"a",83),e._uU(333,"Enquire Now"),e._UZ(334,"i",84),e.qZA(),e.TgZ(335,"a",83),e._uU(336,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(337,"div",70),e.TgZ(338,"div",71),e.TgZ(339,"figure",11),e.TgZ(340,"a",72),e._UZ(341,"img",86),e.qZA(),e.qZA(),e.TgZ(342,"div",74),e.TgZ(343,"h6"),e.TgZ(344,"span"),e._uU(345,"$1,900 "),e.qZA(),e._uU(346," / per person "),e.qZA(),e.qZA(),e.TgZ(347,"div",75),e.TgZ(348,"div",13),e.TgZ(349,"ul"),e.TgZ(350,"li"),e._UZ(351,"i",14),e._uU(352," 10N/11D "),e.qZA(),e.TgZ(353,"li"),e._UZ(354,"i",15),e._uU(355," People: 5 "),e.qZA(),e.TgZ(356,"li"),e._UZ(357,"i",76),e._uU(358," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(359,"div",77),e.TgZ(360,"h3"),e.TgZ(361,"a",72),e._uU(362,"Rangilo Rajasthan with Sand Dunes"),e.qZA(),e.qZA(),e.TgZ(363,"div",78),e.TgZ(364,"span",79),e._uU(365,"(25 reviews)"),e.qZA(),e.TgZ(366,"div",47),e._UZ(367,"span",80),e.qZA(),e.qZA(),e.TgZ(368,"div",81),e.TgZ(369,"p"),e._uU(370,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(371,"div",82),e.TgZ(372,"a",83),e._uU(373,"Enquire Now"),e._UZ(374,"i",84),e.qZA(),e.TgZ(375,"a",83),e._uU(376,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(377,"div",70),e.TgZ(378,"div",71),e.TgZ(379,"figure",11),e.TgZ(380,"a",72),e._UZ(381,"img",85),e.qZA(),e.qZA(),e.TgZ(382,"div",74),e.TgZ(383,"h6"),e.TgZ(384,"span"),e._uU(385,"$1,900 "),e.qZA(),e._uU(386," / per person "),e.qZA(),e.qZA(),e.TgZ(387,"div",75),e.TgZ(388,"div",13),e.TgZ(389,"ul"),e.TgZ(390,"li"),e._UZ(391,"i",14),e._uU(392," 10N/11D "),e.qZA(),e.TgZ(393,"li"),e._UZ(394,"i",15),e._uU(395," People: 5 "),e.qZA(),e.TgZ(396,"li"),e._UZ(397,"i",76),e._uU(398," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(399,"div",77),e.TgZ(400,"h3"),e.TgZ(401,"a",72),e._uU(402,"Rajasthan with Sand Dunes"),e.qZA(),e.qZA(),e.TgZ(403,"div",78),e.TgZ(404,"span",79),e._uU(405,"(25 reviews)"),e.qZA(),e.TgZ(406,"div",47),e._UZ(407,"span",80),e.qZA(),e.qZA(),e.TgZ(408,"div",81),e.TgZ(409,"p"),e._uU(410,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(411,"div",82),e.TgZ(412,"a",83),e._uU(413,"Enquire Now"),e._UZ(414,"i",84),e.qZA(),e.TgZ(415,"a",83),e._uU(416,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(417,"div",70),e.TgZ(418,"div",71),e.TgZ(419,"figure",11),e.TgZ(420,"a",72),e._UZ(421,"img",73),e.qZA(),e.qZA(),e.TgZ(422,"div",74),e.TgZ(423,"h6"),e.TgZ(424,"span"),e._uU(425,"$1,900 "),e.qZA(),e._uU(426," / per person "),e.qZA(),e.qZA(),e.TgZ(427,"div",75),e.TgZ(428,"div",13),e.TgZ(429,"ul"),e.TgZ(430,"li"),e._UZ(431,"i",14),e._uU(432," 7N/8D "),e.qZA(),e.TgZ(433,"li"),e._UZ(434,"i",15),e._uU(435," People: 5 "),e.qZA(),e.TgZ(436,"li"),e._UZ(437,"i",76),e._uU(438," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(439,"div",77),e.TgZ(440,"h3"),e.TgZ(441,"a",72),e._uU(442,"Golden Triangle tour with Ajmer & Pushkar"),e.qZA(),e.qZA(),e.TgZ(443,"div",78),e.TgZ(444,"span",79),e._uU(445,"(25 reviews)"),e.qZA(),e.TgZ(446,"div",47),e._UZ(447,"span",80),e.qZA(),e.qZA(),e.TgZ(448,"div",81),e.TgZ(449,"p"),e._uU(450,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(451,"div",82),e.TgZ(452,"a",83),e._uU(453,"Enquire Now"),e._UZ(454,"i",84),e.qZA(),e.TgZ(455,"a",83),e._uU(456,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(457,"div",87),e.TgZ(458,"div",71),e.TgZ(459,"figure",11),e.TgZ(460,"a",72),e._UZ(461,"img",86),e.qZA(),e.qZA(),e.TgZ(462,"div",74),e.TgZ(463,"h6"),e.TgZ(464,"span"),e._uU(465,"$1,900 "),e.qZA(),e._uU(466," / per person "),e.qZA(),e.qZA(),e.TgZ(467,"div",75),e.TgZ(468,"div",13),e.TgZ(469,"ul"),e.TgZ(470,"li"),e._UZ(471,"i",14),e._uU(472," 3N/4D "),e.qZA(),e.TgZ(473,"li"),e._UZ(474,"i",15),e._uU(475," People: 5 "),e.qZA(),e.TgZ(476,"li"),e._UZ(477,"i",76),e._uU(478," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(479,"div",77),e.TgZ(480,"h3"),e.TgZ(481,"a",72),e._uU(482,"Beautiful Udaipur with Mount Abu ( EX \u2013Udaipur)"),e.qZA(),e.qZA(),e.TgZ(483,"div",78),e.TgZ(484,"span",79),e._uU(485,"(25 reviews)"),e.qZA(),e.TgZ(486,"div",47),e._UZ(487,"span",80),e.qZA(),e.qZA(),e.TgZ(488,"div",81),e.TgZ(489,"p"),e._uU(490,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(491,"div",82),e.TgZ(492,"a",83),e._uU(493,"Enquire Now"),e._UZ(494,"i",84),e.qZA(),e.TgZ(495,"a",83),e._uU(496,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(497,"div",88),e.TgZ(498,"div",89),e.TgZ(499,"div",74),e.TgZ(500,"h5",90),e.TgZ(501,"span"),e._uU(502,"$649"),e.qZA(),e._uU(503," / per person "),e.qZA(),e.TgZ(504,"div",91),e.TgZ(505,"div",47),e._UZ(506,"span",80),e.qZA(),e.qZA(),e.qZA(),e.TgZ(507,"div",92),e.TgZ(508,"h4",93),e._uU(509,"Booking"),e.qZA(),e.TgZ(510,"form",94),e.TgZ(511,"div",7),e.TgZ(512,"div",95),e.TgZ(513,"div",96),e._UZ(514,"input",97),e.qZA(),e.qZA(),e.TgZ(515,"div",95),e.TgZ(516,"div",96),e._UZ(517,"input",98),e.qZA(),e.qZA(),e.TgZ(518,"div",95),e.TgZ(519,"div",96),e._UZ(520,"input",99),e.qZA(),e.qZA(),e.TgZ(521,"div",95),e.TgZ(522,"div",96),e._UZ(523,"input",100),e.qZA(),e.qZA(),e.TgZ(524,"div",95),e.TgZ(525,"h4",101),e._uU(526,"Add Options"),e.qZA(),e.qZA(),e.TgZ(527,"div",102),e.TgZ(528,"div",96),e.TgZ(529,"label",103),e._UZ(530,"input",104),e._UZ(531,"span",105),e._uU(532," Tour guide "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(533,"div",102),e.TgZ(534,"div",96),e.TgZ(535,"label",103),e._UZ(536,"input",104),e._UZ(537,"span",105),e._uU(538," Insurance "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(539,"div",102),e.TgZ(540,"div",96),e.TgZ(541,"label",103),e._UZ(542,"input",104),e._UZ(543,"span",105),e._uU(544," Dinner "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(545,"div",102),e.TgZ(546,"div",96),e.TgZ(547,"label",103),e._UZ(548,"input",104),e._UZ(549,"span",105),e._uU(550," Bike rent "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(551,"div",95),e.TgZ(552,"div",106),e._UZ(553,"input",107),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(554,"div",108),e.TgZ(555,"h5"),e._uU(556,"TRAVEL TIPS"),e.qZA(),e.TgZ(557,"h3"),e._uU(558,"NEED TRAVEL RELATED TIPS & INFORMATION"),e.qZA(),e.TgZ(559,"p"),e._uU(560,"Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. "),e.qZA(),e.TgZ(561,"a",109),e._uU(562,"GET A QUOTE"),e.qZA(),e.qZA(),e.TgZ(563,"div",110),e.TgZ(564,"h5"),e._uU(565,"MORE PACKAGES"),e.qZA(),e.TgZ(566,"h3"),e._uU(567,"OTHER TRAVEL PACKAGES"),e.qZA(),e.TgZ(568,"p"),e._uU(569,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus."),e.qZA(),e.TgZ(570,"ul"),e.TgZ(571,"li"),e.TgZ(572,"a",72),e._UZ(573,"i",111),e._uU(574,"Vacation packages"),e.qZA(),e.qZA(),e.TgZ(575,"li"),e.TgZ(576,"a",72),e._UZ(577,"i",111),e._uU(578,"Honeymoon packages"),e.qZA(),e.qZA(),e.TgZ(579,"li"),e.TgZ(580,"a",72),e._UZ(581,"i",111),e._uU(582,"New year packages"),e.qZA(),e.qZA(),e.TgZ(583,"li"),e.TgZ(584,"a",72),e._UZ(585,"i",111),e._uU(586,"Weekend packages"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(587,"section",112),e.TgZ(588,"div",2),e.TgZ(589,"div",7),e.TgZ(590,"div",113),e.TgZ(591,"div",114),e.TgZ(592,"h5",115),e._uU(593,"HOLIDAY PACKAGE OFFER"),e.qZA(),e.TgZ(594,"h2"),e._uU(595,"HOLIDAY SPECIAL 10% OFF !"),e.qZA(),e.TgZ(596,"h4"),e._uU(597,"Sign up now to recieve hot special offers and information about the best tour packages, updates and discounts !!"),e.qZA(),e.TgZ(598,"div",116),e.TgZ(599,"form"),e._UZ(600,"input",117),e._UZ(601,"input",118),e.qZA(),e.qZA(),e.TgZ(602,"p"),e._uU(603,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eaque adipiscing, luctus eleifend temporibus occaecat luctus eleifend tempo ribus."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(28),e.Q6J("ngClass",e.VKq(2,q,Z.sticky)),e.xp6(227),e.Q6J("config",Z.slideConfigPackage))},directives:[A.mk,o.vE,o.Xg],styles:[""]}),a})()}];let d=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[T.Bz.forChild(c)],T.Bz]}),a})(),p=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[A.ez,d,o.Sv]]}),a})()}}]);