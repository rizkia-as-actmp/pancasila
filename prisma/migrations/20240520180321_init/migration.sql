-- CreateTable
CREATE TABLE `Admin` (
    `admin_id` VARCHAR(191) NOT NULL,
    `admin_full_name` VARCHAR(35) NOT NULL,
    `admin_hashedPassword` VARCHAR(191) NOT NULL,
    `admin_email` VARCHAR(75) NOT NULL,

    UNIQUE INDEX `Admin_admin_id_key`(`admin_id`),
    UNIQUE INDEX `Admin_admin_email_key`(`admin_email`),
    PRIMARY KEY (`admin_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Question` (
    `question_id` INTEGER NOT NULL AUTO_INCREMENT,
    `question` VARCHAR(191) NOT NULL,
    `sila_number` INTEGER NOT NULL,
    `score` INTEGER NOT NULL,

    UNIQUE INDEX `Question_question_id_key`(`question_id`),
    PRIMARY KEY (`question_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Leaderboard` (
    `leaderboard_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(191) NOT NULL,
    `score` INTEGER NOT NULL,

    UNIQUE INDEX `Leaderboard_leaderboard_id_key`(`leaderboard_id`),
    PRIMARY KEY (`leaderboard_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
