<?php
// Check if the form data is submitted
// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Database connection settings
    $db_host ="localhost";
    $db_user ="root";
    $db_pass ="";
    $dbname = "real_meal";

    // Create a new connection
    $conn = mysqli_connect($db_host, $db_user, $db_pass, $dbname);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get testimonial data from the form
    $testimonialText = $_POST['testimonial'];
    $testimonialAuthor = $_POST['name'];
    echo $testimonialText;
    echo $testimonialAuthor;
    // // Prepare and execute the SQL query to insert the testimonial into the database
    // $stmt = $conn->prepare("INSERT INTO testimonials (author, text) VALUES (?, ?)");
    // $stmt->bind_param("ss", $testimonialAuthor, $testimonialText);
    // $stmt->execute();

    // // Close the statement and connection
    // $stmt->close();
    // $conn->close();

    $sql = "INSERT INTO testimonials (author, text)
    VALUES ($testimonialAuthor, $testimonialText)";

    if ($conn->query($sql) === TRUE) {
     echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }

$conn->close();
// }
// include 'fetch_testimonials.php';
?>
