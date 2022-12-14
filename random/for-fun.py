# Variable Assignment
sentence = str(input('Your Text Here: '))
new_sentence = ''
upper = True

print(f'Your sentence (not changed yet):\n{sentence}')

# For loop declaration
for char in sentence:
    if upper:
        char = char.upper()
        new_sentence += char
        upper = False
    else:
        char = char.lower()
        upper = True
        new_sentence += char

print(f'Your sentence (changed):\n{new_sentence}')
