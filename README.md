# ReactPractice - MeetupApp


## Demo
### View the available events
<img align = "left" width="100%" src="https://github.com/terrykim1211/ReactPractice/blob/main/scroll.gif"/>


### Add a new event 
<img align = "left" width="100%" src= "https://github.com/terrykim1211/ReactPractice/blob/main/demo2.PNG"/>


### Add and remove from favorites 
<img align = "left" width="100%" src="https://github.com/terrykim1211/ReactPractice/blob/main/favorites.gif"/>  



## How to use
Simply run the following line in your terminal to start the react web in local environment
```
npm start
```

Replace the 'REPLACE WITH YOUR FIREBASE url' with your own firebase url from js files in "pages" folder

```
    function addMeetupHandler(meetupData) {
        fetch(
            'REPLACE WITH YOUR FIREBASE url',
            {
                method: 'POST', 
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }
```

## References/Citation

React Tutorial:   
https://www.youtube.com/watch?v=Dorf8i6lCuk

AOS animation library:   
https://www.youtube.com/watch?v=JcHLxzrsRS4
https://michalsnik.github.io/aos/

Images:   
[React Logo]
https://velog.io/@hyundong_kk/React%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC

[Leetcode Logo]   
https://haningya.tistory.com/170

[Coding Interview Image]   
https://betterprogramming.pub/how-to-prepare-for-your-next-coding-interview-2a6a6080cfb0


Special thanks to [Tony Chang](https://github.com/tonychang04) for allowing the use of his name and image for testing

<img align = "left" width="100%" src="https://github.com/terrykim1211/ReactPractice/blob/main/demo1.PNG"/>  



