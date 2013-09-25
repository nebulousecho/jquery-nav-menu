	var topMenu = new Array();
		topMenu[0] = {"title":"Startup","url":"","hovCol":"#f7ce00"};
		topMenu[1] = {"title":"Grow","url":"","hovCol":"#f6861f"};
		topMenu[2] = {"title":"Lead","url":"","hovCol":"#009cd8"};
		topMenu[3] = {"title":"Innovate","url":"","hovCol":"#7eb75d"};
		topMenu[4] = {"title":"Money","url":"","hovCol":"#06027b"};
		topMenu[5] = {"title":"People","url":"","hovCol":"#fb433a"};
		topMenu[6] = {"title":"Video","url":"","hovCol":"#000000"};

	var subMenu = new Array();
		subMenu[0] = new Array(); //STARTUP
			subMenu[0][0] = {"title":"Best Industries","url":""};
			subMenu[0][1] = {"title":"Funding","url":""};
			subMenu[0][2] = {"title":"Incubators","url":""};
			subMenu[0][3] = {"title":"Business Plans","url":""};
			subMenu[0][4] = {"title":"Naming","url":""};
			subMenu[0][5] = {"title":"Franchise","url":""};
			subMenu[0][6] = {"title":"Micro-Businesses","url":""};
			subMenu[0][7] = {"title":"Bookkeeping","url":""};
		subMenu[1] = new Array(); //GROW
			subMenu[1][0] = {"title":"Strategy","url":""};
			subMenu[1][1] = {"title":"Operations","url":""};
			subMenu[1][2] = {"title":"Sales","url":""};
			subMenu[1][3] = {"title":"Marketing","url":""};
			subMenu[1][4] = {"title":"Social Media","url":""};
			subMenu[1][5] = {"title":"Global Markets","url":""};
			subMenu[1][6] = {"title":"Pricing","url":""};
			subMenu[1][7] = {"title":"Inc.5000","url":""};
		subMenu[2] = new Array(); //LEAD
			subMenu[2][0] = {"title":"Culture","url":""};
			subMenu[2][1] = {"title":"Decision-Making","url":""};
			subMenu[2][2] = {"title":"Presentation","url":""};
			subMenu[2][3] = {"title":"Ethics","url":""};
			subMenu[2][4] = {"title":"Conflict","url":""};
			subMenu[2][5] = {"title":"Succession","url":""};
			subMenu[2][6] = {"title":"Coaching","url":""};
			subMenu[2][7] = {"title":"Team","url":""};
		subMenu[3] = new Array(); //INNOVATE
			subMenu[3][0] = {"title":"Brainstorming","url":""};
			subMenu[3][1] = {"title":"Inventing","url":""};
			subMenu[3][2] = {"title":"Design","url":""};
			subMenu[3][3] = {"title":"Customer Service","url":""};
			subMenu[3][4] = {"title":"Pivot","url":""};
			subMenu[3][5] = {"title":"Technology","url":""}; 
		subMenu[4] = new Array(); //MONEY
			subMenu[4][0] = {"title":"Bootstrapping","url":""};
			subMenu[4][1] = {"title":"Funding","url":""};
			subMenu[4][2] = {"title":"Tax/Law","url":""};
			subMenu[4][3] = {"title":"Insurance","url":""};
			subMenu[4][4] = {"title":"Budget","url":""};
			subMenu[4][5] = {"title":"Valuation","url":""};
			subMenu[4][6] = {"title":"Business Models","url":""};
			subMenu[4][7] = {"title":"Personal Finance","url":""};
		subMenu[5] = new Array(); //PEOPLE
			subMenu[5][0] = {"title":"Hiring","url":""};
			subMenu[5][1] = {"title":"Productivity","url":""};
			subMenu[5][2] = {"title":"Team Building","url":""};
			subMenu[5][3] = {"title":"Motivating","url":""};
			subMenu[5][4] = {"title":"HR/Benefits","url":""};
			subMenu[5][5] = {"title":"Inc. Life","url":""}; 
		subMenu[6] = new Array(); //VIDEO
			subMenu[6][0] = {"title":"Inc. Live","url":""};
			subMenu[6][1] = {"title":"How I Did It","url":""};
			subMenu[6][2] = {"title":"Founders Forum","url":""};
			subMenu[6][3] = {"title":"Trep Life","url":""};
			subMenu[6][4] = {"title":"Playbook","url":""};
			subMenu[6][5] = {"title":"Idea Lab","url":""}; 
								
	function nav(z) {
		$('#leftSubNav').empty(); // Clear the sub-nav contents.
		$('.navItem:not(this)').css('color','#000000'); // Keep the highlight color selected by resetting everything else.
		$('#dropdown').stop(true,true).fadeIn(500); // Slide out the menu if it isn't opened.
		
		for (i=0;i<subMenu[z].length;i++) {
			$('#leftSubNav').append('<li>' + '<a href="' + subMenu[z][i].url + '" onmouseover=this.style.color="' + topMenu[z].hovCol + '" onmouseout=this.style.color="#000000">' + subMenu[z][i].title + '</a></li>');
		}
	}

	$(document).ready(function() {
		// Populate the main navigation bar.
		for (i=0;i<topMenu.length;i++) {$('#mainNav').append('<li>' + '<a href="' + topMenu[i].url + '" onmouseover="nav(&#39;' + i + '&#39;); this.style.color=&#39;' + topMenu[i].hovCol + '&#39;;" class="navItem">' + topMenu[i].title + '</a></li>')};
		
		// AJAX loading icon... all systems go!
		$('#load-placeholder').append('<div id="loading"><div id="loading-inner"><img src="ajax-loader.gif" /></div></div>');
		$(document).ajaxStart(function() {$('#loading').fadeIn()});
		$(document).ajaxSuccess(function() {$('#loading').fadeOut()});
		
		//Highlight carousel nav arrows on mouseover.
		$('#prev').hover(function() {$('#prev img').attr('src','prev-arrow-hov.png')}, function() {$('#prev img').attr('src','prev-arrow.png')})
		$('#next').hover(function() {$('#next img').attr('src','next-arrow-hov.png')}, function() {$('#next img').attr('src','next-arrow.png')})

	
		// Various circumstances where the menu will fade out.	
		$('#masthead').mouseleave(function() {$('#dropdown').fadeOut(300)});
		$('#interrupt').mouseenter(function() {$('#dropdown').fadeOut(300)});
		$('#above-nav').mouseenter(function() {$('#dropdown').fadeOut(300)});
		
		// Clear menu colors when you fade out the menu.
		$('#masthead').mouseleave(function() {
			$('.navItem').animate({color:'#000000'})
		});
		
		$('#interrupt').mouseenter(function() {
			$('.navItem').animate({color:'#000000'})
		});
			
		$('#above-nav').mouseenter(function() {
			$('.navItem').animate({color:'#000000'})
		});
		
		$('.narrowNavigation').mouseleave(function() {
			$('.navItem').animate({color:'#000000'})
		});
				
		// Fade-out rotation of 'line interrupt' feature images.
		$('#interrupt-imgs').cycle();
						
		// Slide out the search bar.	
	
		$('#search-icon').mouseenter(function() {
			$('#search-container').animate({
				width: '250px',
				opacity: 1.0,
			}, 500)
		});		
	});
