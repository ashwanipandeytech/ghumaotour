"use strict";(self.webpackChunkghumao=self.webpackChunkghumao||[]).push([[941],{2838:(A,p,l)=>{l.d(p,{C:()=>f});var e=l(1223),_=l(4590),Z=l(2382),u=l(9808);function q(i,g){1&i&&(e.TgZ(0,"span",32),e._uU(1," Name is Required "),e.qZA())}function o(i,g){if(1&i&&(e.TgZ(0,"div",30),e.YNc(1,q,2,0,"span",31),e.qZA()),2&i){e.oxw();const n=e.MAs(11);e.xp6(1),e.Q6J("ngIf",null==n.errors?null:n.errors.required)}}function s(i,g){1&i&&(e.TgZ(0,"span",32),e._uU(1," Phone Number is Required "),e.qZA())}function T(i,g){if(1&i&&(e.TgZ(0,"div",30),e.YNc(1,s,2,0,"span",31),e.qZA()),2&i){e.oxw();const n=e.MAs(16);e.xp6(1),e.Q6J("ngIf",null==n.errors?null:n.errors.required)}}function d(i,g){1&i&&(e.TgZ(0,"span",32),e._uU(1," Invalid Email "),e.qZA())}function m(i,g){if(1&i&&(e.TgZ(0,"div",30),e.YNc(1,d,2,0,"span",31),e.qZA()),2&i){e.oxw();const n=e.MAs(21);e.xp6(1),e.Q6J("ngIf",n.invalid&&n.errors.pattern)}}function v(i,g){1&i&&(e.TgZ(0,"span",32),e._uU(1," Destination is Required "),e.qZA())}function U(i,g){if(1&i&&(e.TgZ(0,"div",30),e.YNc(1,v,2,0,"span",31),e.qZA()),2&i){e.oxw();const n=e.MAs(26);e.xp6(1),e.Q6J("ngIf",null==n.errors?null:n.errors.required)}}let f=(()=>{class i{constructor(n){this.dataservice=n}ngOnInit(){this.inquiryData={fullName:"",phone:"",email:"",destination:"",noOfTravellers:"",travellingMonth:""}}submitinquiryform(n){this.inquiryform=n.form,!this.inquiryform.invalid&&this.dataservice.callApi(this.inquiryData,"sendemail.php").subscribe(t=>{})}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(_.D))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-packageenquiry"]],decls:72,vars:10,consts:[[1,"sidebar"],[1,"package-price"],[1,"widget-bg","booking-form-wrap"],[1,"bg-title"],["name","form","novalidate","",1,"booking-form",3,"ngSubmit"],["inquiryform","ngForm"],[1,"row"],[1,"col-md-12"],[1,"form-group"],["type","text","name","fullName","required","","placeholder","Enter Name* ",3,"ngModel","ngModelChange"],["fullName","ngModel"],["class","error-msg",4,"ngIf"],["type","text","name","phone","required","","placeholder"," Phone Number* ",3,"ngModel","ngModelChange"],["phone","ngModel"],["type","text","name","email","pattern","^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$","placeholder","Email Id","autocomplete","off",1,"input-date-picker",3,"ngModel","ngModelChange"],["email","ngModel"],["type","text","name","destination","required","","placeholder","Destination travelling* ","autocomplete","off",3,"ngModel","ngModelChange"],["destination","ngModel"],["type","text","name","noOfTravellers","placeholder","Number Of Travelers","autocomplete","off",3,"ngModel","ngModelChange"],["noOfTravellers","ngModel"],["type","text","name","travellingMonth","placeholder","Number Of People Traveling","autocomplete","off",1,"input-date-picker",3,"ngModel","ngModelChange"],["travellingMonth","ngModel"],[1,"col-sm-12"],[1,"form-group","submit-btn"],["type","submit","name","submit","value","Enquire Now"],[1,"widget-bg","information-content","text-center"],["href","#",1,"button-primary"],[1,"travel-package-content","text-center",2,"background-image","url(assets/images/img11.jpg)"],["href","#"],[1,"far","fa-arrow-alt-circle-right"],[1,"error-msg"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(n,t){if(1&n){const c=e.EpF();e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h4",3),e._uU(4,"Booking"),e.qZA(),e.TgZ(5,"form",4,5),e.NdJ("ngSubmit",function(){e.CHM(c);const a=e.MAs(6);return a.form.valid&&t.submitinquiryform(a)}),e.TgZ(7,"div",6),e.TgZ(8,"div",7),e.TgZ(9,"div",8),e.TgZ(10,"input",9,10),e.NdJ("ngModelChange",function(a){return t.inquiryData.fullName=a}),e.qZA(),e.YNc(12,o,2,1,"div",11),e.qZA(),e.qZA(),e.TgZ(13,"div",7),e.TgZ(14,"div",8),e.TgZ(15,"input",12,13),e.NdJ("ngModelChange",function(a){return t.inquiryData.phone=a}),e.qZA(),e.YNc(17,T,2,1,"div",11),e.qZA(),e.qZA(),e.TgZ(18,"div",7),e.TgZ(19,"div",8),e.TgZ(20,"input",14,15),e.NdJ("ngModelChange",function(a){return t.inquiryData.email=a}),e.qZA(),e.YNc(22,m,2,1,"div",11),e.qZA(),e.qZA(),e.TgZ(23,"div",7),e.TgZ(24,"div",8),e.TgZ(25,"input",16,17),e.NdJ("ngModelChange",function(a){return t.inquiryData.destination=a}),e.qZA(),e.YNc(27,U,2,1,"div",11),e.qZA(),e.qZA(),e.TgZ(28,"div",7),e.TgZ(29,"div",8),e.TgZ(30,"input",18,19),e.NdJ("ngModelChange",function(a){return t.inquiryData.noOfTravellers=a}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(32,"div",7),e.TgZ(33,"div",8),e.TgZ(34,"input",20,21),e.NdJ("ngModelChange",function(a){return t.inquiryData.travellingMonth=a}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(36,"div",22),e.TgZ(37,"div",23),e._UZ(38,"input",24),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(39,"div",25),e.TgZ(40,"h5"),e._uU(41,"TRAVEL TIPS"),e.qZA(),e.TgZ(42,"h3"),e._uU(43,"NEED TRAVEL RELATED TIPS & INFORMATION"),e.qZA(),e.TgZ(44,"p"),e._uU(45,"Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. "),e.qZA(),e.TgZ(46,"a",26),e._uU(47,"GET A QUOTE"),e.qZA(),e.qZA(),e.TgZ(48,"div",27),e.TgZ(49,"h5"),e._uU(50,"MORE PACKAGES"),e.qZA(),e.TgZ(51,"h3"),e._uU(52,"OTHER TRAVEL PACKAGES"),e.qZA(),e.TgZ(53,"p"),e._uU(54,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus."),e.qZA(),e.TgZ(55,"ul"),e.TgZ(56,"li"),e.TgZ(57,"a",28),e._UZ(58,"i",29),e._uU(59,"Vacation packages"),e.qZA(),e.qZA(),e.TgZ(60,"li"),e.TgZ(61,"a",28),e._UZ(62,"i",29),e._uU(63,"Honeymoon packages"),e.qZA(),e.qZA(),e.TgZ(64,"li"),e.TgZ(65,"a",28),e._UZ(66,"i",29),e._uU(67,"New year packages"),e.qZA(),e.qZA(),e.TgZ(68,"li"),e.TgZ(69,"a",28),e._UZ(70,"i",29),e._uU(71,"Weekend packages"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const c=e.MAs(11),r=e.MAs(16),a=e.MAs(21),h=e.MAs(26);e.xp6(10),e.Q6J("ngModel",t.inquiryData.fullName),e.xp6(2),e.Q6J("ngIf",c.touched),e.xp6(3),e.Q6J("ngModel",t.inquiryData.phone),e.xp6(2),e.Q6J("ngIf",r.touched),e.xp6(3),e.Q6J("ngModel",t.inquiryData.email),e.xp6(2),e.Q6J("ngIf",a.dirty||a.touched),e.xp6(3),e.Q6J("ngModel",t.inquiryData.destination),e.xp6(2),e.Q6J("ngIf",h.touched),e.xp6(3),e.Q6J("ngModel",t.inquiryData.noOfTravellers),e.xp6(4),e.Q6J("ngModel",t.inquiryData.travellingMonth)}},directives:[Z._Y,Z.JL,Z.F,Z.Fj,Z.Q7,Z.JJ,Z.On,u.O5,Z.c5],styles:[""]}),i})()},3431:(A,p,l)=>{l.d(p,{f:()=>Z});var e=l(1223),_=l(1461);let Z=(()=>{class u{constructor(){this.slideConfigPackage={dots:!0,arrows:!1,infinite:!0,autoplay:!0,autoplaySpeed:2500,speed:2500,slidesToShow:2,slidesToScroll:1,pauseOnHover:!0,pauseOnFocus:!1,respondTo:"slider",adaptiveHeight:!0,responsive:[{breakpoint:767,settings:{slidesToShow:1}}]}}ngOnInit(){}slickInit(o){console.log("slick initialized")}breakpoint(o){console.log("breakpoint")}}return u.\u0275fac=function(o){return new(o||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-packageslider"]],decls:216,vars:1,consts:[[1,"single-tour-gallery"],[1,"single-tour-slider","slick-initialized","slick-slider","slick-dotted"],[1,"row","package-slider","carousel",3,"config","init","breakpoint"],["slickModal","slick-carousel"],["ngxSlickItem","",1,"col-lg-4","col-md-6","col-sm-4","slide"],[1,"package-wrap"],[1,"feature-image"],["href","#"],["src","assets/images/Leh.png","alt",""],[1,"package-content-wrap"],[1,"package-meta","text-center"],[1,"far","fa-clock"],[1,"fas","fa-user-friends"],[1,"fas","fa-map-marker-alt"],[1,"package-content"],[1,"review-area"],[1,"review-text"],["title","Rated 5 out of 5",1,"rating-start"],[2,"width","60%"],[1,"innercontent"],[1,"btn-wrap"],["href","#",1,"button-text","width-6"],[1,"fas","fa-arrow-right"],["src","assets/images/ooty.png","alt",""],["src","assets/images/Gangtok.png","alt",""],["src","assets/images/Europe.png","alt",""],["src","assets/images/Singapore.png","alt",""],["src","assets/images/Thailand.png","alt",""]],template:function(o,s){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"h3"),e._uU(2,"POPULAR PACKAGES"),e.qZA(),e.TgZ(3,"div",1),e.TgZ(4,"ngx-slick-carousel",2,3),e.NdJ("init",function(d){return s.slickInit(d)})("breakpoint",function(d){return s.breakpoint(d)}),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"figure",6),e.TgZ(9,"a",7),e._UZ(10,"img",8),e.qZA(),e.qZA(),e.TgZ(11,"div",9),e.TgZ(12,"div",10),e.TgZ(13,"ul"),e.TgZ(14,"li"),e._UZ(15,"i",11),e._uU(16," 7N/8D "),e.qZA(),e.TgZ(17,"li"),e._UZ(18,"i",12),e._uU(19," People: 5 "),e.qZA(),e.TgZ(20,"li"),e._UZ(21,"i",13),e._uU(22," Leh "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"div",14),e.TgZ(24,"h3"),e.TgZ(25,"a",7),e._uU(26,"Leh"),e.qZA(),e.qZA(),e.TgZ(27,"div",15),e.TgZ(28,"span",16),e._uU(29,"(25 reviews)"),e.qZA(),e.TgZ(30,"div",17),e._UZ(31,"span",18),e.qZA(),e.qZA(),e.TgZ(32,"div",19),e.TgZ(33,"p"),e._uU(34,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(35,"div",20),e.TgZ(36,"a",21),e._uU(37,"Enquire Now"),e._UZ(38,"i",22),e.qZA(),e.TgZ(39,"a",21),e._uU(40,"Know More "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(41,"div",4),e.TgZ(42,"div",5),e.TgZ(43,"figure",6),e.TgZ(44,"a",7),e._UZ(45,"img",23),e.qZA(),e.qZA(),e.TgZ(46,"div",9),e.TgZ(47,"div",10),e.TgZ(48,"ul"),e.TgZ(49,"li"),e._UZ(50,"i",11),e._uU(51," 7N/8D "),e.qZA(),e.TgZ(52,"li"),e._UZ(53,"i",12),e._uU(54," People: 5 "),e.qZA(),e.TgZ(55,"li"),e._UZ(56,"i",13),e._uU(57," Ooty "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(58,"div",14),e.TgZ(59,"h3"),e.TgZ(60,"a",7),e._uU(61,"Ooty"),e.qZA(),e.qZA(),e.TgZ(62,"div",15),e.TgZ(63,"span",16),e._uU(64,"(25 reviews)"),e.qZA(),e.TgZ(65,"div",17),e._UZ(66,"span",18),e.qZA(),e.qZA(),e.TgZ(67,"div",19),e.TgZ(68,"p"),e._uU(69,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(70,"div",20),e.TgZ(71,"a",21),e._uU(72,"Enquire Now"),e._UZ(73,"i",22),e.qZA(),e.TgZ(74,"a",21),e._uU(75,"Know More "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(76,"div",4),e.TgZ(77,"div",5),e.TgZ(78,"figure",6),e.TgZ(79,"a",7),e._UZ(80,"img",24),e.qZA(),e.qZA(),e.TgZ(81,"div",9),e.TgZ(82,"div",10),e.TgZ(83,"ul"),e.TgZ(84,"li"),e._UZ(85,"i",11),e._uU(86," 7N/8D "),e.qZA(),e.TgZ(87,"li"),e._UZ(88,"i",12),e._uU(89," People: 5 "),e.qZA(),e.TgZ(90,"li"),e._UZ(91,"i",13),e._uU(92," Gangtok "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(93,"div",14),e.TgZ(94,"h3"),e.TgZ(95,"a",7),e._uU(96,"Gangtok"),e.qZA(),e.qZA(),e.TgZ(97,"div",15),e.TgZ(98,"span",16),e._uU(99,"(25 reviews)"),e.qZA(),e.TgZ(100,"div",17),e._UZ(101,"span",18),e.qZA(),e.qZA(),e.TgZ(102,"div",19),e.TgZ(103,"p"),e._uU(104,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(105,"div",20),e.TgZ(106,"a",21),e._uU(107,"Enquire Now"),e._UZ(108,"i",22),e.qZA(),e.TgZ(109,"a",21),e._uU(110,"Know More "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(111,"div",4),e.TgZ(112,"div",5),e.TgZ(113,"figure",6),e.TgZ(114,"a",7),e._UZ(115,"img",25),e.qZA(),e.qZA(),e.TgZ(116,"div",9),e.TgZ(117,"div",10),e.TgZ(118,"ul"),e.TgZ(119,"li"),e._UZ(120,"i",11),e._uU(121," 7N/8D "),e.qZA(),e.TgZ(122,"li"),e._UZ(123,"i",12),e._uU(124," People: 5 "),e.qZA(),e.TgZ(125,"li"),e._UZ(126,"i",13),e._uU(127," Europe "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(128,"div",14),e.TgZ(129,"h3"),e.TgZ(130,"a",7),e._uU(131,"Europe"),e.qZA(),e.qZA(),e.TgZ(132,"div",15),e.TgZ(133,"span",16),e._uU(134,"(25 reviews)"),e.qZA(),e.TgZ(135,"div",17),e._UZ(136,"span",18),e.qZA(),e.qZA(),e.TgZ(137,"div",19),e.TgZ(138,"p"),e._uU(139,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(140,"div",20),e.TgZ(141,"a",21),e._uU(142,"Enquire Now"),e._UZ(143,"i",22),e.qZA(),e.TgZ(144,"a",21),e._uU(145,"Know More "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(146,"div",4),e.TgZ(147,"div",5),e.TgZ(148,"figure",6),e.TgZ(149,"a",7),e._UZ(150,"img",26),e.qZA(),e.qZA(),e.TgZ(151,"div",9),e.TgZ(152,"div",10),e.TgZ(153,"ul"),e.TgZ(154,"li"),e._UZ(155,"i",11),e._uU(156," 7N/8D "),e.qZA(),e.TgZ(157,"li"),e._UZ(158,"i",12),e._uU(159," People: 5 "),e.qZA(),e.TgZ(160,"li"),e._UZ(161,"i",13),e._uU(162," Singapore "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(163,"div",14),e.TgZ(164,"h3"),e.TgZ(165,"a",7),e._uU(166,"Singapore"),e.qZA(),e.qZA(),e.TgZ(167,"div",15),e.TgZ(168,"span",16),e._uU(169,"(25 reviews)"),e.qZA(),e.TgZ(170,"div",17),e._UZ(171,"span",18),e.qZA(),e.qZA(),e.TgZ(172,"div",19),e.TgZ(173,"p"),e._uU(174,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(175,"div",20),e.TgZ(176,"a",21),e._uU(177,"Enquire Now"),e._UZ(178,"i",22),e.qZA(),e.TgZ(179,"a",21),e._uU(180,"Know More "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(181,"div",4),e.TgZ(182,"div",5),e.TgZ(183,"figure",6),e.TgZ(184,"a",7),e._UZ(185,"img",27),e.qZA(),e.qZA(),e.TgZ(186,"div",9),e.TgZ(187,"div",10),e.TgZ(188,"ul"),e.TgZ(189,"li"),e._UZ(190,"i",11),e._uU(191," 7N/8D "),e.qZA(),e.TgZ(192,"li"),e._UZ(193,"i",12),e._uU(194," People: 5 "),e.qZA(),e.TgZ(195,"li"),e._UZ(196,"i",13),e._uU(197," Thailand "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(198,"div",14),e.TgZ(199,"h3"),e.TgZ(200,"a",7),e._uU(201,"Thailand"),e.qZA(),e.qZA(),e.TgZ(202,"div",15),e.TgZ(203,"span",16),e._uU(204,"(25 reviews)"),e.qZA(),e.TgZ(205,"div",17),e._UZ(206,"span",18),e.qZA(),e.qZA(),e.TgZ(207,"div",19),e.TgZ(208,"p"),e._uU(209,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(210,"div",20),e.TgZ(211,"a",21),e._uU(212,"Enquire Now"),e._UZ(213,"i",22),e.qZA(),e.TgZ(214,"a",21),e._uU(215,"Know More "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(4),e.Q6J("config",s.slideConfigPackage))},directives:[_.vE,_.Xg],styles:[""]}),u})()}}]);