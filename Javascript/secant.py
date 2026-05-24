# WAP to find the point of intersection of
# y = ln(x) + 1 and y = x using Secant Method
# with absolute relative error less than 0.5%

import math

# Function:
# ln(x) + 1 = x
# f(x) = ln(x) + 1 - x

def f(x):
    return math.log(x) + 1 - x


# Initial guesses
x0 = 0.9
x1 = 1.1

# Error limit
tolerance = 0.5   # 0.5%

print("Secant Method")
print("-" * 85)

# Table heading
print(f"{'Iter':<6}{'x0':<12}{'x1':<12}{'x2':<15}{'f(x2)':<15}{'Abs Error %':<15}")

print("-" * 85)

iteration = 1

while True:

    # Secant formula
    x2 = x1 - (f(x1) * (x1 - x0)) / (f(x1) - f(x0))

    # Absolute relative error
    error = abs((x2 - x1) / x2) * 100

    # Print table row
    print(f"{iteration:<6}{x0:<12.6f}{x1:<12.6f}{x2:<15.6f}{f(x2):<15.6f}{error:<15.6f}")

    # Stopping condition
    if error < tolerance:
        break

    # Update values
    x0 = x1
    x1 = x2

    iteration += 1

print("-" * 85)
print(f"\nPoint of intersection = ({x2:.6f}, {x2:.6f})")