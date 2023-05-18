# **INTRODUCTION TO PROGRAMMING**


---


Programming is the process of creating a set of instructions that tell a computer how to perform a task. This can be done using a variety of computer programming languages, such as Python, R, JavaScript, C++, etc. *italicized text*

# **Python Programming**
Python is an open-source programming language that is used in web programming, data science, artificial intelligence, and many scientific applications.

# **Why Python?**
Python has simplified syntax and concepts, making it easier to understand as a first language

# **Downloading [Python](https://www.python.org)**

Making sure Python is properly installed and configured on your computer: 

If you are using a Mac or a Linux machine, you most likely already have Python installed on your system, but it may not be the newest version. 

To check if you have the right version, open a terminal window -- you can do this by opening the terminal program if you are using Mac or Linux:

1.   Type "python3" into the terminal

![output to terminal](/images/mod1imgs/mod1_1.png)

- If you did not get a result that looks like the screenshot above, Python followed by a version number, then you received an error message. This indicates that Python is not installed on your computer. 

If you do not have Python installed on your computer: 

1.   Go to the [Python website](https://www.python.org/).
2.   Click on the [Downloads tab](https://www.python.org/downloads/).
3.   Download the latest version of Python for your operating system (Windows, Linux/UNIX, macOS).
4.   Open a terminal window and check if the version was properly installed by typing "python3".

# Basic Syntax

## Using Python as Calculator

```python
2 + 2
```
```javascript
4
```

```python 
100 - 3*5
```

85

```python
(100 - 3*5) / 5 #division always returns a floating point number
```

17.0

```python
3 / 4
```

0.75

The integer numbers, 4 and 85, have type **int**. The numbers with a fractional part, 17.0 and 0.75, have type **float**. 

Division (/) always returns a float. 

```python
9 / 2 #regular division returns a float
```

4.5

```python
8 / 2
```

4.0

Floor division (//) returns an integer value. Floor division means dividing and rounding down to the nearest integer.

```python
9 // 2 #floor division returns an integer
```

4

The % symbol is called the modulo operator. This returns the remainder of a division problem. It returns the remainder of dividing the value to the left of the % by the value to the right.

```python
9 % 2 # % returns the remainder of the division
```

1

The ** operator calculates powers.

```python
6 ** 2 #6^2
```

36

```python
2 ** 3 #2^31
```

8

Different operand types: with both floating point and integer operands in an operation, the operator converts the operand to a floating point automatically.

```python
1 - 3.75
```

-2.75

```python
4 * 3.2
```

12.8

The equal sign (=) is used to assign a value to a variable.



```python
length = 2
width = 2 ** 2
height = 3 * 1
length * width * height
```

24


The result is only displayed once there is an interactive prompt.

You can update the value of a variable by assigning it to a new value.

```python
variable = 4
variable * 3
```

12

```python
variable = 5
variable * 2
```

10

The last printed expression is assigned to the variable.

The last printed expression is assigned to the variable.

```python
x
```

```python
---------------------------------------------------------------------------

NameError                                 Traceback (most recent call last)
<ipython-input-24-6fcf9dfbd479> in <module>
----> 1 x

NameError: name 'x' is not defined
```

