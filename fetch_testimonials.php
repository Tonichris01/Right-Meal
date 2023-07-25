<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "real meal";

// Create a new connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute the SQL query to fetch testimonials from the database
$sql = "SELECT * FROM testimonials";
$result = $conn->query($sql);

// Close the connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Right Meal - Testimonials</title>
    <link rel="icon" href="img/right_meal_short_logo.png" type="image/icon type">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="testimonial.css">
</head>
<body>
    <!-- Your existing HTML content here -->

    <div id="testimonialSlider">
        <?php
        // Loop through the fetched testimonials and display them on the page
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo '
                <div class="testimonial">
                    <p class="testimonial-text">"' . $row['text'] . '"</p>
                    <h4 class="testimonial-author">' . $row['author'] . '</h4>
                    <button class="delete-button" onclick="deleteTestimonial(this)">&#10006;</button>
                </div>';
            }
        }
        ?>
    </div>

    <!-- Your existing HTML content here -->

    <script src="testimonial.js"></script>
</body>
</html>
