/**
 * Created by malin.sofrone on 15/09/16.
 */
$(function () {
    $.ajax( {
        type: 'GET',
        url: 'https://cdn.contentful.com/spaces/lskkit434qgu?access_token=698ecc849316e21eb6bb03e4fd290619be2cb0fdac871c1964847588db0fe28a',
        success: function (books) {
            // console.log('success', books);
            $( ".book" ).append( "<p>Name: " + books.name + " </p>" );

        }
        }

    )
})
