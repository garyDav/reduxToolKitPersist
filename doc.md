# Install libraries

```
npm i @reduxjs/toolkit react-redux
npm i redux-persist redux-thunk

npm i axios
```

Text object selection
v + i + w
:set wrap
:set nowrap
d + i + w
v + i + '
v + i + w ++ Shift + u
v + i + w ++ u
:%s/dispatch/type/g

## Basic keymap

Ctrl-[ to Esc

## Four modes

- Normal
- Insert
- Visual
- Command
  - :h, :q, :w, :tabedit

## Basic cursor movements

- **h** move one character left
- **j** move one row down
- **k** move one row up
- **l** move one character right
- Repeat predix - Movement can be prefixed by a number to move several lines/characters at a time
  - 4j
- Word movements
  - **w** move to beginning of next word
  - **b** move to previous beginning of word

## Horizontal motions

- \_ : Move to the head of the line
- $ : Move to the end of the line
- 0 : Move to the beginning of the line

Example:

- d$ : Delete from your cursor all the way to the end of the line
- c$ : Delete from your cursor all the way to the end of the line and enter insert mode
  - c means 'change'
- A : Append text to end of line and enter insert mode
- o : Insert new line and indent and enter insert mode
- O : Insert new line above your cursor and indent and insert mode

## Undo/redo

- In normal mode:
  - u : Undo
  - ctrl-r : Redo

## Text object selection

- viw = visual inner word
