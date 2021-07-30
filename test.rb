# --------------------------------------------------------------------
15 # 1. Allow the maze to be customized via command-line parameters
16 # --------------------------------------------------------------------
17 
18 width  = (ARGV[0] || 10).to_i
19 height = (ARGV[1] || width).to_i
20 seed   = (ARGV[2] || rand(0xFFFF_FFFF)).to_i
21 
22 srand(seed)
23 
24 grid = Array.new(height) { Array.new(width, 0) }
25 
26 # --------------------------------------------------------------------
27 # 2. Set up constants to aid with describing the passage directions
28 # --------------------------------------------------------------------
29 
30 S, E = 1, 2
31 HORIZONTAL, VERTICAL = 1, 2
32 
33 # --------------------------------------------------------------------
34 # 3. Helper routines
35 # --------------------------------------------------------------------
36 
37 def display_maze(grid)
38   print "\e[H" # move to upper-left
39   puts " " + "_" * (grid[0].length * 2 - 1)
40   grid.each_with_index do |row, y|
41     print "|"
42     row.each_with_index do |cell, x|
43       bottom = y+1 >= grid.length
44       south  = (cell & S != 0 || bottom)
45       south2 = (x+1 < grid[y].length && grid[y][x+1] & S != 0 || bottom)
46       east   = (cell & E != 0 || x+1 >= grid[y].length)
47 
48       print(south ? "_" : " ")
49       print(east ? "|" : ((south && south2) ? "_" : " "))
50     end
51     puts
52   end
53 end
54 
55 def choose_orientation(width, height)
56   if width < height
57     HORIZONTAL
58   elsif height < width
59     VERTICAL
60   else
61     rand(2) == 0 ? HORIZONTAL : VERTICAL
62   end
63 end
64 
65 # --------------------------------------------------------------------
66 # 4. The recursive-division algorithm itself
67 # --------------------------------------------------------------------
68 
69 def divide(grid, x, y, width, height, orientation)
70   return if width < 2 || height < 2
71 
72   display_maze(grid)
73   sleep 0.02
74 
75   horizontal = orientation == HORIZONTAL
76 
77   # where will the wall be drawn from?
78   wx = x + (horizontal ? 0 : rand(width-2))
79   wy = y + (horizontal ? rand(height-2) : 0)
80 
81   # where will the passage through the wall exist?
82   px = wx + (horizontal ? rand(width) : 0)
83   py = wy + (horizontal ? 0 : rand(height))
84 
85   # what direction will the wall be drawn?
86   dx = horizontal ? 1 : 0
87   dy = horizontal ? 0 : 1
88 
89   # how long will the wall be?
90   length = horizontal ? width : height
91 
92   # what direction is perpendicular to the wall?
93   dir = horizontal ? S : E
94 
95   length.times do
96     grid[wy][wx] |= dir if wx != px || wy != py
97     wx += dx
98     wy += dy
99   end
100 
101   nx, ny = x, y
102   w, h = horizontal ? [width, wy-y+1] : [wx-x+1, height]
103   divide(grid, nx, ny, w, h, choose_orientation(w, h))
104 
105   nx, ny = horizontal ? [x, wy+1] : [wx+1, y]
106   w, h = horizontal ? [width, y+height-wy-1] : [x+width-wx-1, height]
107   divide(grid, nx, ny, w, h, choose_orientation(w, h))
108 end
109 
110 print "\e[2J" # clear screen
111 
112 divide(grid, 0, 0, width, height, choose_orientation(width, height))
113 display_maze(grid)