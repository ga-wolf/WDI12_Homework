



When someone requests a movie poster we want to:

CHECK if it is in our database
IF it is in our database, it should serve it from our database.
ELSE we should then go to omdb
  ADD this to our databse, storing it
  THEN serve it to the user who queried it
SO if a movie is searched again, it will be found in our database, omdb will not be queried.





USER REQUEST -----> Check our database ---> IF movie is found, serve from our database
                                       ---> IF movie is not found, query OMDB ---> Add the data returned from the query to our database ---> Serve the information FROM OUR DATABASE


  Make a new SQL table