from tkinter import *
import tkinter.messagebox
import random
import json

def gen_pass():
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

    nr_letters = random.randint(8, 10)
    nr_symbols = random.randint(2, 4)
    nr_numbers = random.randint(2, 4)

    password_list = [random.choice(letters) for char in range(nr_letters)] + [random.choice(symbols) for char in range(nr_symbols)] + [random.choice(numbers) for char in range(nr_numbers)]
    
    random.shuffle(password_list)
    
    password = "" 
    password = password.join(password_list)

    password_entry.delete(0, END)
    password_entry.insert(0, password)

def search():
	website = website_entry.get()
	if len(website) == 0:
		tkinter.messagebox.showinfo(title = "Warning", message = "Make sure that you have not left any of the fields empty!")
	else:
		with open("data.json", "r") as data_file:
			data = json.load(data_file)
			if website.lower() not in data:
				tkinter.messagebox.showinfo(title = "Warning", message = "The website that you have mentioned does not exist")
			else:
				web_details = data.get(website.lower())
				email = web_details.get("email")
				password = web_details.get("password")
				tkinter.messagebox.showinfo(title = website.capitalize(), message = f"Website: {website.capitalize()}\nEmail/Username: {email}\nPassword: {password}")
				

def text_file_save():
    website = website_entry.get()
    email_username = email_username_entry.get()
    password = password_entry.get()
    if len(website) == 0 or len(password) == 0:
        tkinter.messagebox.showinfo(title = "Warning", message = "Make sure that you have not left any of the fields empty!")
    else:
        with open("data.txt", "r") as data: #This then checks if we aldready have the password to that webiste.
            for line in data:
                temp_list = line.split("|")
                check_list = [item.strip() for item in temp_list]
                if check_list[0] == website:
                    proceed = tkinter.messagebox.askyesno(title = "Warning", message = "You aldready have the password to that webiste, would you like to ovewrite it?")
                    if proceed == True:
                        text = line.replace(check_list[1], f"{email_username} ") and line.replace(check_list[2], password)
                        with open("data.txt", "w") as data:
                            data.write(text)
                            website_entry.delete(0, END)
                            password_entry.delete(0, END)
                    elif proceed == False:
                        website_entry.delete(0, END)
                        password_entry.delete(0, END)
                else:
                    pass
            with open("data.txt", "a") as data:
                data.write(f"\n{website} | {email_username} | {password}")
                website_entry.delete(0, END)
                password_entry.delete(0, END)   
              
def json_save():
	website = website_entry.get()
	email = email_username_entry.get()
	password = password_entry.get()
	new_data = {
		website.lower(): {
		"email": email,
		"password": password
		}
	}
	if len(website) == 0 or len(email) == 0 or len(password) == 0:
		tkinter.messagebox.showinfo(title = "Warning", message = "Make sure that you have not left any of the fields empty!")
	else: 
		with open("data.json", "r") as data_file:
			data = json.load(data_file)
			if website.lower() in data:
				proceed = tkinter.messagebox.askyesno(title = "Warning", message = "You aldready have the password to that website, would you like to overwrite it?")
				if proceed == True:
					new_data.update({"website": {"password": password}})
					data.update(new_data)
					with open("data.json", "w") as json_data:
						json.dump(data, json_data, indent = 4)
				elif proceed == False:
					pass
			else:
				data.update(new_data)
				with open("data.json", "w") as json_data:
					json.dump(data, json_data, indent = 4)

	website_entry.delete(0, END)
	password_entry.delete(0, END)


window = Tk()
window.title("Password manager")  
window.config(padx = 50, pady = 50)

canvas = Canvas(height = 200, width = 200)
logo_img = PhotoImage(file = "logo.png")
canvas.create_image(100, 100, image = logo_img)
canvas.grid(row = 0, column = 1)

website_label = Label(text = "Website: ")
website_label.grid(row = 1, column = 0)

email_username_label = Label(text = "Email/Username: ")
email_username_label.grid(row = 2, column =  0)

password_label = Label(text = "Password: "  )
password_label.grid(row = 3, column = 0)

website_entry = Entry(width = 21)
website_entry.grid(row = 1, column = 1)
website_entry.focus()

email_username_entry = Entry(width = 38)
email_username_entry.grid(row = 2, column = 1, columnspan = 2)
email_username_entry.insert(0, "")

password_entry = Entry(width = 21)
password_entry.grid(row = 3, column = 1)

password_button = Button(text = "Generate password", command = gen_pass)
password_button.grid(row = 3, column = 2)

add_button = Button(text = "Add", width = 36, command = json_save)
add_button.grid(row = 4, column = 1, columnspan = 2)

search_button = Button(text = "Search", command = search)
search_button.grid(row = 1, column = 2, sticky = "ew")

window.mainloop()
