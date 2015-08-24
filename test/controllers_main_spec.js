/**
 * Author: Daniel M. de Oliveira
 */

describe('MainController',function(){

    var scope = {};

    var mockBook = function() {
        $httpBackend.expectGET('/sample_book.json').respond(200,'\
        {\
        "pages" : [\
            {\
                "page_nr_hr" : "I",\
                "img_file" : "http://arachne.uni-koeln.de/images/stichwerke/antiquities_of_ionia_1/BOOK-antiquitiesofionia01-0001_196.jpg"\
            },\
            {\
                "page_nr_hr" : "II",\
                "img_file" : "http://arachne.uni-koeln.de/images/stichwerke/antiquities_of_ionia_1/BOOK-antiquitiesofionia01-0002_197.jpg"\
            },\
            {\
                "page_nr_hr" : "3",\
                "img_file" : "http://arachne.uni-koeln.de/images/stichwerke/antiquities_of_ionia_1/BOOK-antiquitiesofionia01-0003_198.jpg"\
            },\
            {\
                "page_nr_hr" : "4",\
                "img_file" : "http://arachne.uni-koeln.de/images/stichwerke/antiquities_of_ionia_1/BOOK-antiquitiesofionia01-0004_199.jpg"\
            },\
            {\
                "page_nr_hr" : "5",\
                "img_file" : "http://arachne.uni-koeln.de/images/stichwerke/antiquities_of_ionia_1/BOOK-antiquitiesofionia01-0005_200.jpg"\
            },\
            {\
                "page_nr_hr" : "6",\
                "img_file" : "http://arachne.uni-koeln.de/images/stichwerke/antiquities_of_ionia_1/BOOK-antiquitiesofionia01-0006_201.jpg"\
            }]\
		}');
        $httpBackend.flush();
    }

    beforeEach(function(){
        module('idaiBookBrowser.controllers');
        inject(function($controller,_$httpBackend_){
            $httpBackend=_$httpBackend_;
            $controller('MainController',{'$scope':scope});
        });
        mockBook();
    });


    it('should load more pages as long as there are pages to load',function(){

        expect(scope.pageMinis.length).toBe(5);
        scope.loadMore();
        expect(scope.pageMinis.length).toBe(6);
        scope.loadMore();
        expect(scope.pageMinis.length).toBe(6);
    });
});