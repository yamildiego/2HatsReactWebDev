import { getDateFormatted } from './assets/utils/utils';

let today = new Date();
let yesterday = new Date(today.getFullYear(), today.getMonth(), (today.getDate() - 1));
let beforeYesterday = new Date(yesterday.getFullYear(), yesterday.getMonth(), (yesterday.getDate() - 1));

export const data = {
    "first_name": "Jane",
    "last_name": "Appleseed",
    "height_cm": 163,
    "weight_kg": 57,
    "daily_goal": 1500,
    "data_points": [
        {
            "date": getDateFormatted(today),
            "intake_list": []
        },
        {
            "date": getDateFormatted(yesterday),
            "intake_list": [
                {
                    "nix_item_id": "55c9298af0432259369100c4",
                    "food_name": "Italian sausage",
                    "serving_unit": "link",
                    "serving_weight_grams": 75,
                    "serving_qty": 1,
                    "nf_calories": 258,
                    "serving_size": 2,
                    "meal_type": "breakfast",
                    "thumb": "https://d1r9wva3zcpswd.cloudfront.net/55c92acdf04322593691010c.jpeg"
                },
                {
                    "food_name": "salmon salad",
                    "serving_unit": "cup",
                    "serving_weight_grams": 407.01,
                    "serving_qty": 1,
                    "nf_calories": 389.27,
                    "serving_size": 1.5,
                    "meal_type": "lunch",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"
                },
                {
                    "food_name": "boneless skinless chicken breasts",
                    "serving_qty": 1,
                    "serving_unit": "breast",
                    "serving_weight_grams": 120,
                    "nf_calories": 198,
                    "serving_size": 2,
                    "meal_type": "dinner",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/7820_thumb.jpg"
                },
                {
                    "food_name": "slice cheese",
                    "serving_qty": 1,
                    "serving_unit": "slice",
                    "serving_weight_grams": 28,
                    "nf_calories": 113.12,
                    "serving_size": 2,
                    "meal_type": "snack",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"
                },
                {
                    "food_name": "orange",
                    "serving_qty": 1,
                    "serving_unit": "fruit (2-7/8\" dia)",
                    "serving_weight_grams": 140,
                    "nf_calories": 68.6,
                    "serving_size": 2,
                    "meal_type": "snack",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"
                }
            ]
        },
        {
            "date": getDateFormatted(beforeYesterday),
            "intake_list": [
                {
                    "food_name": "fried eggs",
                    "serving_qty": 1,
                    "serving_unit": "large",
                    "serving_weight_grams": 46,
                    "nf_calories": 90.16,
                    "serving_size": 2,
                    "meal_type": "breakfast",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/1741_thumb.jpg"
                },
                {
                    "food_name": "chicken salad",
                    "serving_qty": 0.5,
                    "serving_unit": "cup",
                    "serving_weight_grams": 112.1,
                    "nf_calories": 253.99,
                    "serving_size": 1,
                    "meal_type": "lunch",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"
                },
                {
                    "nix_item_id": "598c0695306b814040ff908b",
                    "food_name": "Boneless Skinless Chicken Breasts",
                    "serving_unit": "oz",
                    "serving_qty": 4,
                    "nf_calories": 110,
                    "serving_size": 1,
                    "meal_type": "dinner",
                    "thumb": "https://d1r9wva3zcpswd.cloudfront.net/5c04d53ff01a65ec7b2089dd.jpeg"
                },
                {
                    "food_name": "slice cheese",
                    "serving_qty": 1,
                    "serving_unit": "slice",
                    "serving_weight_grams": 28,
                    "nf_calories": 113.12,
                    "serving_size": 2,
                    "meal_type": "snack",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"
                },
                {
                    "food_name": "orange",
                    "serving_qty": 1,
                    "serving_unit": "fruit (2-7/8\" dia)",
                    "serving_weight_grams": 140,
                    "nf_calories": 68.6,
                    "serving_size": 2,
                    "meal_type": "snack",
                    "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"
                }
            ]
        }
    ]
}