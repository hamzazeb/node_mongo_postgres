CREATE TABLE users_profile(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(20) UNIQUE,
    address TEXT,
    city VARCHAR(30),
    country VARCHAR(30),
    postal_code VARCHAR(15),
    about TEXT,
    f_name VARCHAR(20) NOT NULL,
    l_name VARCHAR(20) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(20) NOT NULL UNIQUE,
    phone_number VARCHAR(13) NOT NULL UNIQUE,
    dob TIMESTAMPTZ
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_profile_id INT NOT NULL REFERENCES users_profile(id),
    role VARCHAR(15),
    timestamp TIMESTAMPTZ NOT NULL
);

-- ALTER TABLE users ADD FOREIGN KEY(user_info_id) REFERENCES users_info(id);

-- FOREIGN KEY(appointment_id) REFERENCES appointments(appointment_id)