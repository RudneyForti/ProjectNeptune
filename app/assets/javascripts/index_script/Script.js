// JavaScript Document

$(document).ready(function(e){

/* ---------- Altura das Sections ---------- */
	
	if($(window).width() > 1023)
	{
		var height = $(window).innerHeight();
	}
	
/* ---------- Window Scroll ---------- */	
	
	var home = $(window).innerHeight() - 1;
	var newsobre = home + $(".new").innerHeight();
	var sobre = newsobre + $(".sobre").innerHeight();
	var nossas = sobre + $(".nossas").innerHeight();
	var servicos = nossas + $(".servicos").innerHeight();
	var depoimentos = servicos + $(".depoimentos").innerHeight();
	var contato = depoimentos + $(".contato").innerHeight();
	
	$(window).scroll(function(){
		
		if($(this).scrollTop() > home)
		{
			$("header").addClass("header-active");
		}
		
		if($(this).scrollTop() < home)
		{
			$("#sobre").removeClass("active");
			$("header").removeClass("header-active");
		}
		
		if(($(this).scrollTop() > home) && ($(this).scrollTop() < newsobre))
		{
			$("#sobre").addClass("active");	
			$("#quemsomos").removeClass("active");			
		}
		
		else if(($(this).scrollTop() > newsobre) && ($(this).scrollTop() < nossas))
		{
			$("#quemsomos").addClass("active");
			$("#sobre").removeClass("active");
			$("#servicos").removeClass("active");
		}
		
		else if(($(this).scrollTop() > nossas) && ($(this).scrollTop() < servicos))
		{
			$("#servicos").addClass("active");
			$("#quemsomos").removeClass("active");
			$("#contato").removeClass("active");
		}
		
		else if(($(this).scrollTop() > servicos) && ($(this).scrollTop() < contato))
		{
			$("#contato").addClass("active");
			$("#servicos").removeClass("active");
		}

	});
	

	
/* ---------- Menu ---------- */	

	$("nav a").click(function(e){
		
		$("nav a").removeClass("active");
		
		$(this).addClass("active");	
		 
		$("html, body").animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);		
		
	});
	
	var height = $(window).innerHeight();
	
	$(".slide_1").css({"height" : height , "top" : 0});
	$(".slide_2").css({"height" : height, "top" : - height});
	$(".slide_3").css({"height" : height, "top" : - height * 2});
	
	$(".principal").css({"height" : height});
	$(".slide").css({"height" : height});
	
	$(".logo-menu").click(function(e){
		
		$("html, body").animate({scrollTop: 0}, 1000);
		
	})
	
	/* ----------------------- Slide - Banner ------------------------- */
	
	$("#lsti").click(function(e) {
        
		$("html, body").animate({scrollTop: $("#1").offset().top}, 800);
		
    });
	
	/* ----------------------- Slide - Banner ------------------------- */ 

	$(function(e){
		
			var t = 0;
		
			var intervalo = setInterval(function(){
				 
				slider()
				 
			}, 5000);
			
			function slider(){
				
				if (t<$(window).width() * 2)
				{
					t += $(window).width();
					
					$(".slide").animate({ "left": "-"+t+"px" });
				}
				
				else
				{
					t = 0;
					$(".slide").css("left","0px");		
				}
				
			}
		
	});
	
	/* ---------- Sobre ---------- */
	
	$("#sobre-sm").click(function(e){
		
		$(".new-sobre").slideDown(600);
		$("html, body").animate({scrollTop: $("#11").offset().top}, 800);

	});
	
	$("#btn-top").click(function(e){
		
		$(".new-sobre").slideUp(600);
		$("html, body").animate({scrollTop: $("#1").offset().top}, 800);
		
	});
	
	/* ---------- Contato ---------- */
	
	$("#clique").click(function(e){
		$(".formulario").slideDown(600);
		$("html, body").animate({scrollTop: $("#41").offset().top}, 800);
	});
	
	$("#top-form").click(function(e){
		$(".formulario").slideUp(600);	
		$("html, body").animate({scrollTop: $("#4").offset().top}, 800);
	});
	
	/* ---------- Depoimentos ---------- */
	
	$(function(e){
		
		var t = 0;
		
		var p2 = $(window).width();
		
		var p3 = $(window).width() * 2;
	
		var intervalo = setInterval(function(){
			 
			slider()
			 
		}, 12000);
		
		function parar() {
		
			clearInterval(intervalo);
	
		}
		
		function slider(){
			
			if (t<$(window).width() * 2)
			{
				t += $(window).width();
				
				$(".slider_dep").animate({ "left": "-"+t+"px" });
				
				if(t == $(window).width())
				{
					$(".circle_dep_1").removeClass("active_circle");
					$(".circle_dep_2").addClass("active_circle");	
				}
				
				else if(t == $(window).width() * 2)
				{
					$(".circle_dep_2").removeClass("active_circle");
					$(".circle_dep_3").addClass("active_circle");	
				}
				
			}
			
			else
			{
				t = 0;
				$(".slider_dep").css("left","0px");
				$(".circle_dep_3").removeClass("active_circle");
				$(".circle_dep_1").addClass("active_circle");		
			}
			
		}
			
		$(".circle_dep_1").click(function(e) {
		
			parar();
			
			$(".slider_dep").animate({"left" : "0px"});
			$(".circle_dep_1").addClass("active_circle");
			$(".circle_dep_2").removeClass("active_circle");
			$(".circle_dep_3").removeClass("active_circle");
		
		});	
	
		$(".circle_dep_2").click(function(e) {
			
			parar();
			
			$(".slider_dep").animate({"left" : "-" + p2 + "px"});
			$(".circle_dep_1").removeClass("active_circle");
			$(".circle_dep_2").addClass("active_circle");
			$(".circle_dep_3").removeClass("active_circle");
			
		});
		
		$(".circle_dep_3").click(function(e) {
			
			parar();
			
			$(".slider_dep").animate({"left": "-" + p3 + "px"});
			$(".circle_dep_1").removeClass("active_circle");
			$(".circle_dep_2").removeClass("active_circle");
			$(".circle_dep_3").addClass("active_circle");
			
		});

	});
    
    $("#btn-enviar").click(function(e){
		
		if($("#nome").val() == "")
		{
			$("#erro-nome").fadeIn(300);
			$("#erro-nome").delay(2000).fadeOut(1000);
		}
		
		else
		{
			$("#erro-nome").fadeOut(300);
			
			if($("#email").val() == "")
			{
				$("#erro-email").delay(300).fadeIn(300);
				$("#erro-email").delay(2000).fadeOut(1000);
				
			}
			
			else
			{
				$("#erro-email").fadeOut(300);
				
				if($("#tel").val() == "")
				{
					$("#erro-telefone").delay(300).fadeIn(300);
					$("#erro-telefone").delay(2000).fadeOut(1000);
				}
				
				else
				{
					$("#erro-telefone").fadeOut(300);
					
                    if($("#assunto").val() == "")
                    {
                        $("#erro-assunto").delay(300).fadeIn(300);
                        $("#erro-assunto").delay(2000).fadeOut(1000);
                    }
                    
                    else
                    {
                        
                        $("#erro-assunto").fadeOut(300);
                        
                        if($("#mensagem").val() == "")
                        {
                            $("#erro-mensagem").delay(300).fadeIn(300);
                            $("#erro-mensagem").delay(2000).fadeOut(1000);
                        }

                        else
                        {
                            $("#erro-mensagem").fadeOut(300)
                            $("#success").delay(300).fadeIn(300);
                            $("#success").delay(3000).fadeOut(1000);

                            $("#nome").val("");
                            $("#email").val("");
                            $("#tel").val("");
                            $("#assunto").val("");
                            $("#mensagem").val("");

                        }
                        
                    }
              	
				}
				
			}
			
		}
		
	});
	
/* ---------- Footer ---------- */	

	$("footer a").click(function(e){
		
		$("html, body").animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
		
	});
	
	
/* ------------------------------------------------------------ Responsive --------------------------------------------------------- */
	
	
	
/* -------------------- Menu - Icon-------------------- */
		
	$(".icon-menu").click(function(e) {
		
		if($(window).width() > 481)
		{
			$(".menu-animate").animate({"margin-left" : "-300px"}, 300);
		}
		
		else
		{
			$(".menu-animate").animate({"margin-left" : "-70%"}, 300);
		}
		
		
	});
	
	$(".seta").click(function(e) {
        
		$(".menu-animate").animate({"margin-left" : "0px"}, 300);
		
    });
	
/*  ------------------------------ Menu  ------------------------------ */	

	$(".nav a").click(function(e) { 
        
		$(".nav a").removeClass("active"); 
		
		$(this).addClass("active");
		
		$("html, body").animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);	
		
		$(".menu-animate").animate({"margin-left" : "0px"}, 300); 
		
    });
	
	/*  ------------------------------ Sobre ------------------------------ */	
	
	$("#r-sobre-sm").click(function(e){
		
		$(".new-sobre").slideDown(600);
		$("html, body").animate({scrollTop: $("#r11").offset().top}, 800);

	});
	
	$("#r-btn-top").click(function(e){
		
		$(".new-sobre").slideUp(600);
		$("html, body").animate({scrollTop: $("#r1").offset().top}, 800);
		
	});
	
	/* ---------- Contato ---------- */
	
	$("#r-clique").click(function(e){
		$(".formulario").slideDown(600);
		$("html, body").animate({scrollTop: $("#r41").offset().top}, 800);
	});
	
	$("#r-top-form").click(function(e){
		$(".formulario").slideUp(600);	
		$("html, body").animate({scrollTop: $("#r4").offset().top}, 800);
	});	
	
});