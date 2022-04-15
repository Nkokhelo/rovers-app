#Problem Breakdown :

While I was reading the problem statement I found out we have 4 nouns, I used a UML approach by using nouns to identify classes: below list contain my classes with their functions  
  - Rover
    - landingPosition
    - activeDirection
    - getPosition
    - move
    - turnLeft *anticlockwise rotation*
      - setDirection
        -- get prev direction and update to a new direction
    - turnRight *clockwise rotation*
      - setDirection
        -- get prev direction and update to a new direction

  - Plateau
    - setSize
    - placeRover *if the're more than 1 rovers keep adding them*
  
  - Position
    - x
    - y
    - isValidLanding
  
  - Direction *N - W - S - E*
    - setDirection
    - updateDirection

  - Movement *L - R - M*
    - left is +1/90deg
    - right is -1/90deg
    - move plus 1 forward depending on the last active rover direction


I'll convert these nouns to classes that I am going to work with, and use drawio [diagram](https://app.diagrams.net/#HNkokhelo%2Frovers-app%2Fmain%2Fproblem_solving.drawio)

#### Input breakdown
  - Plateau Size -> line1
    - loop
      - Rover Position and Facing Direction -> line2
      - Rover movement -> line3