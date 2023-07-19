<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $age = $_POST["age"];
    $sex = $_POST["sex"];

    // Suggest a dietary therapy based on the user's input
    if ($age < 18) {
        $therapy = "Pediatric Nutrition";
    } elseif ($sex == "Male") {
        $therapy = "Men's Health Nutrition";
    } else {
        $therapy = "Women's Health Nutrition";
    }

    // Create a dietary plan based on the suggested therapy
    switch ($therapy) {
        case "Pediatric Nutrition":
            $plan = ["Breakfast: Oatmeal with fruit", "Lunch: Turkey and cheese sandwich", "Dinner: Grilled chicken with vegetables"];
            break;
        case "Men's Health Nutrition":
            $plan = ["Breakfast: Scrambled eggs with spinach", "Lunch: Grilled chicken salad", "Dinner: Salmon with quinoa and vegetables"];
            break;
        case "Women's Health Nutrition":
            $plan = ["Breakfast: Greek yogurt with berries", "Lunch: Quinoa and vegetable stir-fry", "Dinner: Baked fish with sweet potato and broccoli"];
            break;
    }
}
?>