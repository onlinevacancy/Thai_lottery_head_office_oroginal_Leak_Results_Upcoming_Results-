try{
jQuery(function($){var dataHash='internallinksmanager029f6b8e52c';$('[data-'+dataHash+']').on('mousedown',function(){var $link=$(this);var data={action:'seo_automated_link_building_track_link',link_id:$link.data(dataHash),title:$link.text(),source_url:location.href,destination_url:$link.attr('href'),};$.post(seoAutomatedLinkBuilding.ajaxUrl,data)})})
}catch(e){console.error("An error has occurred. [ File: https://thethaiger.com/wp-content/plugins/seo-automated-link-building/js/seo-automated-link-building.js ] [ "+e.stack+" ]");}
