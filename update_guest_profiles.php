<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["status" => "error", "message" => "Unsupported request method"]);
    exit();
}

$data = file_get_contents("php://input");

if (!empty($data)) {
    file_put_contents("guest_profiles.json", $data);
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid data"]);
}
?>
