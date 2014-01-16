// RCUE Namespace
var RCUE = RCUE || {};


// Util: Dropdown Combo-box Input Change on Selection
(function($) {
  RCUE.combobox = function( selector ) {
    $( selector ).each(function() {
      var input = $( this ).find('.form-control'),
          menu = $( this ).find('.dropdown-menu'),
          links = menu.find('li a');
      
      $( links ).on('click', function() {
        input.val( $(this).html() );
      });
    }); 
  };
})(jQuery);


// Util: Dropdown Multi-select Plugin
// http://davidstutz.github.io/bootstrap-multiselect/
(function($) {
  RCUE.multiselect = function( selector ) {
    $(selector).multiselect({
      buttonWidth: '100%',
      buttonContainer: '<span class="btn-group btn-group-rcue btn-block" />',
      buttonClass: 'btn btn-default btn-block'
    });
  };
})(jQuery);


// Util: RCUE Popovers
// Add data-close="true" to insert close X icon
(function($) {
  RCUE.popovers = function( selector ) {
    var allpopovers = $(selector);
    
    // Initialize
    allpopovers.popover();
    
    // Add close icons
    allpopovers.filter('[data-close=true]').each(function(index, element) {
      var $this = $(element),
        title = $this.attr('data-original-title') + '&nbsp;<span />';

      $this.attr('data-original-title', title);
    });
    
    // Bind Close Icon to Toggle Dispaly
    allpopovers.on('click', function(e) {
      var $this = $(this);
        $title = $this.next('.popover').find('.popover-title');
      
      // Only if data-close is true add class "x" to title for right padding
      $title.find('span').parent('.popover-title').addClass('x');
      
      // Bind x icon to close popover
      $title.find('span').on('click', function() {
        $this.popover('toggle');
      });
      
      // Prevent href="#" page scroll to top
      e.preventDefault();
    });
  };
})(jQuery);