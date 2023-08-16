import Player from '@vimeo/player';

$(document).ready(() => {
    let $section = $('section.homepage-video');
    $section.each((i, el) => {
        let $iframe = $(el).find('iframe');
        let $cover = $(el).find('.homepage-video__cover');
        let $button = $(el).find('button');

        const player = new Player($iframe[0]);

        let isMuted = true;
        $button.on('click', function () {
            let $icon = $(this).find('.fa');
            $icon.removeClass('fa-volume-off fa-volume-up');
            if (isMuted) {
                $icon.addClass('fa-volume-up');
                isMuted = false;
            } else {
                $icon.addClass('fa-volume-off');
                isMuted = true;
            }
            player.setMuted(isMuted).then(function (muted) {
                // muted was turned on
            }).catch(function (error) {
                // an error occurred
            });
        });
        $cover.on('click', function () {
            player.play();
            $cover.fadeOut();
        });
    });
});