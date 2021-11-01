# Mobile-Application-UBB-3rd_year
Code written while the mobile application course in the fall semester at the UBB university from Cluj-Napoca


**Funfest APP**

The app is an Ionic app and is split in 2 main parts: 

*   Client (Frontend) - Ionic + Angular

*   Server (Backend) - Spring Boot + Java



_Client_:
-   

The client has 2 main components: 
   
*   master-view component:   
    
    This component has an ngContainer which populates the screen with multiple "contests" which can be clicked
    
*   detail-component
    
    This component holds the details of a content (such as the schedule and important infomartion)
    
    Also , there is an add-contest component which is used for creating a new contests
    After inserting the title and the description of the new contest, the app sends to the backend this information and the list of contests is updated
    
    
_Server_
-   
The server is split in 3 parts:
*   funfest-application:

This is the module which starts the Spring boot aplication and which also containes some key configurations 
for the Spring Boot (such as allowing Cors for the http requests)

*   funfest-web

This is the module which comunicates with the frontend. It containes the backend urls to which the 
frontend can get/post data

*   funfest-backend

This is the library which containes the services, repositories and the domain of the application


