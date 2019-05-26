function passValues(){
			var name = document.getElementsByTagName("input")[0].value;
			var weight = document.getElementsByTagName("input")[3].value;
            var height = document.getElementsByTagName("input")[4].value;
            var age = document.getElementsByTagName("input")[5].value;
            var gender = document.getElementsByTagName("select")[0].value;
            var activity = document.getElementsByTagName("select")[1].value;
            var dailyCalorieIntake ;
            var bmi = ((weight)/(height * height)).toFixed(2);
            
            if(gender == "Male" && activity == "Sedentary")
            	dailyCalorieIntake = ((10 * weight) + (625 * height) - (5 * age) + 5) * 1.2;
            else if(gender == "Male" && activity == "Moderately Active")
            	dailyCalorieIntake = ((10 * weight) + (625 * height) - (5 * age) + 5) * 1.3;
             else if(gender == "Male" && activity == "Very Active")
            	dailyCalorieIntake = ((10 * weight) + (625 * height) - (5 * age) + 5) * 1.4;
             else if(gender == "Female" && activity == "Sedentary")
            	dailyCalorieIntake = ((10 * weight) + (625 * height) - (5 * age) - 161) * 1.2;
             else if(gender == "Female" && activity == "Moderately Active")
            	dailyCalorieIntake = ((10 * weight) + (625 * height) - (5 * age) - 161) * 1.3;
             else if(gender == "Female" && activity == "Very Active")
            	dailyCalorieIntake = ((10 * weight) + (625 * height) - (5 * age) - 161) * 1.4;
            window.localStorage.setItem("dailyCalorieIntake",dailyCalorieIntake.toFixed(2));
            window.localStorage.setItem("bmi",bmi);  
            window.localStorage.setItem("name",name);
            window.localStorage.setItem("age",age);
        return false;
		}