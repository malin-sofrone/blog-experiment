/**
 * Created by malin.sofrone on 15/09/16.
 */
$(function () {
    $.ajax( {
        type: 'GET',
        url: 'https://cdn.contentful.com/spaces/lskkit434qgu?access_token=TOKEN',
        success: function (books) {
            // console.log('success', books);
            $( ".book" ).append( "<p>Name: " + books.name + " </p>" );

        }
        }

    )
})
