/*
 Navicat Premium Dump SQL

 Source Server         : postgreSQL
 Source Server Type    : PostgreSQL
 Source Server Version : 150015 (150015)
 Source Host           : localhost:5432
 Source Catalog        : zipzipy_lms
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 150015 (150015)
 File Encoding         : 65001

 Date: 23/11/2025 22:47:01
*/


-- ----------------------------
-- Type structure for gtrgm
-- ----------------------------
DROP TYPE IF EXISTS "public"."gtrgm";
CREATE TYPE "public"."gtrgm" (
  INPUT = "public"."gtrgm_in",
  OUTPUT = "public"."gtrgm_out",
  INTERNALLENGTH = VARIABLE,
  CATEGORY = U,
  DELIMITER = ','
);
ALTER TYPE "public"."gtrgm" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for activity_logs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."activity_logs_id_seq";
CREATE SEQUENCE "public"."activity_logs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
ALTER SEQUENCE "public"."activity_logs_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for categories_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."categories_id_seq";
CREATE SEQUENCE "public"."categories_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."categories_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for certificates_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."certificates_id_seq";
CREATE SEQUENCE "public"."certificates_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
ALTER SEQUENCE "public"."certificates_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for course_reviews_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."course_reviews_id_seq";
CREATE SEQUENCE "public"."course_reviews_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
ALTER SEQUENCE "public"."course_reviews_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for courses_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."courses_id_seq";
CREATE SEQUENCE "public"."courses_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."courses_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for email_verifications_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."email_verifications_id_seq";
CREATE SEQUENCE "public"."email_verifications_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."email_verifications_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for enrollments_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."enrollments_id_seq";
CREATE SEQUENCE "public"."enrollments_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
ALTER SEQUENCE "public"."enrollments_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for lesson_progress_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."lesson_progress_id_seq";
CREATE SEQUENCE "public"."lesson_progress_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
ALTER SEQUENCE "public"."lesson_progress_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for lesson_resources_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."lesson_resources_id_seq";
CREATE SEQUENCE "public"."lesson_resources_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."lesson_resources_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for lessons_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."lessons_id_seq";
CREATE SEQUENCE "public"."lessons_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."lessons_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for modules_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."modules_id_seq";
CREATE SEQUENCE "public"."modules_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."modules_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for notifications_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."notifications_id_seq";
CREATE SEQUENCE "public"."notifications_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
ALTER SEQUENCE "public"."notifications_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for password_resets_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."password_resets_id_seq";
CREATE SEQUENCE "public"."password_resets_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."password_resets_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for payments_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."payments_id_seq";
CREATE SEQUENCE "public"."payments_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
ALTER SEQUENCE "public"."payments_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for phone_verifications_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."phone_verifications_id_seq";
CREATE SEQUENCE "public"."phone_verifications_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."phone_verifications_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for question_options_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."question_options_id_seq";
CREATE SEQUENCE "public"."question_options_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."question_options_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for quiz_answers_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."quiz_answers_id_seq";
CREATE SEQUENCE "public"."quiz_answers_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
ALTER SEQUENCE "public"."quiz_answers_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for quiz_attempts_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."quiz_attempts_id_seq";
CREATE SEQUENCE "public"."quiz_attempts_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
ALTER SEQUENCE "public"."quiz_attempts_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for quiz_questions_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."quiz_questions_id_seq";
CREATE SEQUENCE "public"."quiz_questions_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."quiz_questions_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for quizzes_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."quizzes_id_seq";
CREATE SEQUENCE "public"."quizzes_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."quizzes_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for refunds_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."refunds_id_seq";
CREATE SEQUENCE "public"."refunds_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
ALTER SEQUENCE "public"."refunds_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for tags_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tags_id_seq";
CREATE SEQUENCE "public"."tags_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."tags_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for user_sessions_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."user_sessions_id_seq";
CREATE SEQUENCE "public"."user_sessions_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
ALTER SEQUENCE "public"."user_sessions_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for users_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."users_id_seq";
CREATE SEQUENCE "public"."users_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
ALTER SEQUENCE "public"."users_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for wishlist_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."wishlist_id_seq";
CREATE SEQUENCE "public"."wishlist_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
ALTER SEQUENCE "public"."wishlist_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Table structure for activity_logs
-- ----------------------------
DROP TABLE IF EXISTS "public"."activity_logs";
CREATE TABLE "public"."activity_logs" (
  "id" int8 NOT NULL DEFAULT nextval('activity_logs_id_seq'::regclass),
  "user_id" int8,
  "action" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "entity_type" varchar(50) COLLATE "pg_catalog"."default",
  "entity_id" int8,
  "metadata" jsonb,
  "ip_address" inet,
  "user_agent" text COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."activity_logs" OWNER TO "postgres";

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS "public"."categories";
CREATE TABLE "public"."categories" (
  "id" int4 NOT NULL DEFAULT nextval('categories_id_seq'::regclass),
  "slug" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default",
  "icon_url" text COLLATE "pg_catalog"."default",
  "parent_id" int4,
  "sort_order" int4 DEFAULT 0,
  "is_active" bool DEFAULT true,
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."categories" OWNER TO "postgres";

-- ----------------------------
-- Table structure for certificates
-- ----------------------------
DROP TABLE IF EXISTS "public"."certificates";
CREATE TABLE "public"."certificates" (
  "id" int8 NOT NULL DEFAULT nextval('certificates_id_seq'::regclass),
  "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "user_id" int8 NOT NULL,
  "course_id" int4 NOT NULL,
  "enrollment_id" int8 NOT NULL,
  "certificate_number" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "pdf_url" text COLLATE "pg_catalog"."default",
  "image_url" text COLLATE "pg_catalog"."default",
  "verification_code" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "is_public" bool DEFAULT true,
  "issued_at" timestamp(6) DEFAULT now(),
  "created_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."certificates" OWNER TO "postgres";

-- ----------------------------
-- Table structure for course_reviews
-- ----------------------------
DROP TABLE IF EXISTS "public"."course_reviews";
CREATE TABLE "public"."course_reviews" (
  "id" int8 NOT NULL DEFAULT nextval('course_reviews_id_seq'::regclass),
  "user_id" int8 NOT NULL,
  "course_id" int4 NOT NULL,
  "enrollment_id" int8 NOT NULL,
  "rating" int4 NOT NULL,
  "review_text" text COLLATE "pg_catalog"."default",
  "is_approved" bool DEFAULT false,
  "approved_by" int8,
  "approved_at" timestamp(6),
  "helpful_count" int4 DEFAULT 0,
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."course_reviews" OWNER TO "postgres";

-- ----------------------------
-- Table structure for course_tags
-- ----------------------------
DROP TABLE IF EXISTS "public"."course_tags";
CREATE TABLE "public"."course_tags" (
  "course_id" int4 NOT NULL,
  "tag_id" int4 NOT NULL,
  "created_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."course_tags" OWNER TO "postgres";

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS "public"."courses";
CREATE TABLE "public"."courses" (
  "id" int4 NOT NULL DEFAULT nextval('courses_id_seq'::regclass),
  "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "slug" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "title" varchar(500) COLLATE "pg_catalog"."default" NOT NULL,
  "subtitle" varchar(1000) COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "what_you_learn" text[] COLLATE "pg_catalog"."default",
  "requirements" text[] COLLATE "pg_catalog"."default",
  "thumbnail_url" text COLLATE "pg_catalog"."default",
  "promo_video_url" text COLLATE "pg_catalog"."default",
  "instructor_id" int8 NOT NULL,
  "category_id" int4,
  "level" varchar(20) COLLATE "pg_catalog"."default" DEFAULT 'beginner'::character varying,
  "language" varchar(5) COLLATE "pg_catalog"."default" DEFAULT 'si'::character varying,
  "price" numeric(10,2) DEFAULT 0.00,
  "original_price" numeric(10,2),
  "currency" varchar(3) COLLATE "pg_catalog"."default" DEFAULT 'LKR'::character varying,
  "is_free" bool DEFAULT false,
  "is_published" bool DEFAULT false,
  "published_at" timestamp(6),
  "has_preview" bool DEFAULT false,
  "total_duration_minutes" int4 DEFAULT 0,
  "total_lessons" int4 DEFAULT 0,
  "total_students" int4 DEFAULT 0,
  "average_rating" numeric(3,2) DEFAULT 0.00,
  "total_reviews" int4 DEFAULT 0,
  "has_certificate" bool DEFAULT true,
  "has_quiz" bool DEFAULT false,
  "has_assignments" bool DEFAULT false,
  "has_internship" bool DEFAULT false,
  "meta_title" varchar(255) COLLATE "pg_catalog"."default",
  "meta_description" text COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6) DEFAULT now(),
  "deleted_at" timestamp(6)
)
;
ALTER TABLE "public"."courses" OWNER TO "postgres";

-- ----------------------------
-- Table structure for email_verifications
-- ----------------------------
DROP TABLE IF EXISTS "public"."email_verifications";
CREATE TABLE "public"."email_verifications" (
  "id" int4 NOT NULL DEFAULT nextval('email_verifications_id_seq'::regclass),
  "user_id" int8 NOT NULL,
  "code" varchar(10) COLLATE "pg_catalog"."default" NOT NULL,
  "expires_at" timestamp(6) NOT NULL,
  "verified_at" timestamp(6),
  "attempts" int4 DEFAULT 0,
  "ip_address" inet,
  "created_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."email_verifications" OWNER TO "postgres";

-- ----------------------------
-- Table structure for enrollments
-- ----------------------------
DROP TABLE IF EXISTS "public"."enrollments";
CREATE TABLE "public"."enrollments" (
  "id" int8 NOT NULL DEFAULT nextval('enrollments_id_seq'::regclass),
  "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "user_id" int8 NOT NULL,
  "course_id" int4 NOT NULL,
  "payment_id" int8,
  "amount_paid" numeric(10,2) DEFAULT 0.00,
  "currency" varchar(3) COLLATE "pg_catalog"."default" DEFAULT 'LKR'::character varying,
  "progress_percentage" int4 DEFAULT 0,
  "completed_lessons" int4 DEFAULT 0,
  "total_lessons" int4 DEFAULT 0,
  "status" varchar(20) COLLATE "pg_catalog"."default" DEFAULT 'active'::character varying,
  "enrolled_at" timestamp(6) DEFAULT now(),
  "completed_at" timestamp(6),
  "last_accessed_at" timestamp(6),
  "expires_at" timestamp(6),
  "certificate_issued_at" timestamp(6),
  "certificate_url" text COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."enrollments" OWNER TO "postgres";

-- ----------------------------
-- Table structure for lesson_progress
-- ----------------------------
DROP TABLE IF EXISTS "public"."lesson_progress";
CREATE TABLE "public"."lesson_progress" (
  "id" int8 NOT NULL DEFAULT nextval('lesson_progress_id_seq'::regclass),
  "user_id" int8 NOT NULL,
  "lesson_id" int4 NOT NULL,
  "enrollment_id" int8 NOT NULL,
  "is_completed" bool DEFAULT false,
  "completed_at" timestamp(6),
  "watch_duration_seconds" int4 DEFAULT 0,
  "last_watch_position_seconds" int4 DEFAULT 0,
  "notes" text COLLATE "pg_catalog"."default",
  "times_watched" int4 DEFAULT 0,
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."lesson_progress" OWNER TO "postgres";

-- ----------------------------
-- Table structure for lesson_resources
-- ----------------------------
DROP TABLE IF EXISTS "public"."lesson_resources";
CREATE TABLE "public"."lesson_resources" (
  "id" int4 NOT NULL DEFAULT nextval('lesson_resources_id_seq'::regclass),
  "lesson_id" int4 NOT NULL,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "file_url" text COLLATE "pg_catalog"."default" NOT NULL,
  "file_type" varchar(50) COLLATE "pg_catalog"."default",
  "file_size_kb" int4,
  "sort_order" int4 DEFAULT 0,
  "created_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."lesson_resources" OWNER TO "postgres";

-- ----------------------------
-- Table structure for lessons
-- ----------------------------
DROP TABLE IF EXISTS "public"."lessons";
CREATE TABLE "public"."lessons" (
  "id" int4 NOT NULL DEFAULT nextval('lessons_id_seq'::regclass),
  "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "module_id" int4 NOT NULL,
  "title" varchar(500) COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default",
  "content" text COLLATE "pg_catalog"."default",
  "video_type" varchar(20) COLLATE "pg_catalog"."default" DEFAULT 'bunny'::character varying,
  "video_id" varchar(255) COLLATE "pg_catalog"."default",
  "video_url" text COLLATE "pg_catalog"."default",
  "video_duration_seconds" int4,
  "video_metadata" jsonb,
  "has_downloadable" bool DEFAULT false,
  "is_free_preview" bool DEFAULT false,
  "is_published" bool DEFAULT true,
  "sort_order" int4 DEFAULT 0,
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."lessons" OWNER TO "postgres";

-- ----------------------------
-- Table structure for modules
-- ----------------------------
DROP TABLE IF EXISTS "public"."modules";
CREATE TABLE "public"."modules" (
  "id" int4 NOT NULL DEFAULT nextval('modules_id_seq'::regclass),
  "course_id" int4 NOT NULL,
  "title" varchar(500) COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default",
  "sort_order" int4 DEFAULT 0,
  "is_published" bool DEFAULT true,
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."modules" OWNER TO "postgres";

-- ----------------------------
-- Table structure for notifications
-- ----------------------------
DROP TABLE IF EXISTS "public"."notifications";
CREATE TABLE "public"."notifications" (
  "id" int8 NOT NULL DEFAULT nextval('notifications_id_seq'::regclass),
  "user_id" int8 NOT NULL,
  "type" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "message" text COLLATE "pg_catalog"."default",
  "action_url" text COLLATE "pg_catalog"."default",
  "is_read" bool DEFAULT false,
  "read_at" timestamp(6),
  "created_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."notifications" OWNER TO "postgres";

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS "public"."password_resets";
CREATE TABLE "public"."password_resets" (
  "id" int4 NOT NULL DEFAULT nextval('password_resets_id_seq'::regclass),
  "user_id" int8 NOT NULL,
  "token" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "expires_at" timestamp(6) NOT NULL,
  "used_at" timestamp(6),
  "ip_address" inet,
  "user_agent" text COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."password_resets" OWNER TO "postgres";

-- ----------------------------
-- Table structure for payments
-- ----------------------------
DROP TABLE IF EXISTS "public"."payments";
CREATE TABLE "public"."payments" (
  "id" int8 NOT NULL DEFAULT nextval('payments_id_seq'::regclass),
  "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "user_id" int8 NOT NULL,
  "course_id" int4 NOT NULL,
  "amount" numeric(10,2) NOT NULL,
  "currency" varchar(3) COLLATE "pg_catalog"."default" DEFAULT 'LKR'::character varying,
  "payment_method" varchar(50) COLLATE "pg_catalog"."default",
  "payment_gateway_id" varchar(255) COLLATE "pg_catalog"."default",
  "status" varchar(20) COLLATE "pg_catalog"."default" DEFAULT 'pending'::character varying,
  "gateway_response" jsonb,
  "ip_address" inet,
  "user_agent" text COLLATE "pg_catalog"."default",
  "paid_at" timestamp(6),
  "refunded_at" timestamp(6),
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."payments" OWNER TO "postgres";

-- ----------------------------
-- Table structure for phone_verifications
-- ----------------------------
DROP TABLE IF EXISTS "public"."phone_verifications";
CREATE TABLE "public"."phone_verifications" (
  "id" int4 NOT NULL DEFAULT nextval('phone_verifications_id_seq'::regclass),
  "user_id" int8 NOT NULL,
  "code" varchar(10) COLLATE "pg_catalog"."default" NOT NULL,
  "expires_at" timestamp(6) NOT NULL,
  "verified_at" timestamp(6),
  "attempts" int4 DEFAULT 0,
  "ip_address" inet,
  "created_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."phone_verifications" OWNER TO "postgres";

-- ----------------------------
-- Table structure for question_options
-- ----------------------------
DROP TABLE IF EXISTS "public"."question_options";
CREATE TABLE "public"."question_options" (
  "id" int4 NOT NULL DEFAULT nextval('question_options_id_seq'::regclass),
  "question_id" int4 NOT NULL,
  "option_text" text COLLATE "pg_catalog"."default" NOT NULL,
  "is_correct" bool DEFAULT false,
  "sort_order" int4 DEFAULT 0,
  "created_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."question_options" OWNER TO "postgres";

-- ----------------------------
-- Table structure for quiz_answers
-- ----------------------------
DROP TABLE IF EXISTS "public"."quiz_answers";
CREATE TABLE "public"."quiz_answers" (
  "id" int8 NOT NULL DEFAULT nextval('quiz_answers_id_seq'::regclass),
  "attempt_id" int8 NOT NULL,
  "question_id" int4 NOT NULL,
  "option_id" int4,
  "answer_text" text COLLATE "pg_catalog"."default",
  "selected_options" int4[],
  "is_correct" bool,
  "points_earned" int4 DEFAULT 0,
  "answered_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."quiz_answers" OWNER TO "postgres";

-- ----------------------------
-- Table structure for quiz_attempts
-- ----------------------------
DROP TABLE IF EXISTS "public"."quiz_attempts";
CREATE TABLE "public"."quiz_attempts" (
  "id" int8 NOT NULL DEFAULT nextval('quiz_attempts_id_seq'::regclass),
  "user_id" int8 NOT NULL,
  "quiz_id" int4 NOT NULL,
  "score" numeric(5,2),
  "total_questions" int4,
  "correct_answers" int4,
  "status" varchar(20) COLLATE "pg_catalog"."default" DEFAULT 'in_progress'::character varying,
  "started_at" timestamp(6) DEFAULT now(),
  "completed_at" timestamp(6),
  "time_taken_seconds" int4,
  "created_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."quiz_attempts" OWNER TO "postgres";

-- ----------------------------
-- Table structure for quiz_questions
-- ----------------------------
DROP TABLE IF EXISTS "public"."quiz_questions";
CREATE TABLE "public"."quiz_questions" (
  "id" int4 NOT NULL DEFAULT nextval('quiz_questions_id_seq'::regclass),
  "quiz_id" int4 NOT NULL,
  "question_text" text COLLATE "pg_catalog"."default" NOT NULL,
  "question_type" varchar(20) COLLATE "pg_catalog"."default" DEFAULT 'multiple_choice'::character varying,
  "points" int4 DEFAULT 1,
  "sort_order" int4 DEFAULT 0,
  "explanation" text COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."quiz_questions" OWNER TO "postgres";

-- ----------------------------
-- Table structure for quizzes
-- ----------------------------
DROP TABLE IF EXISTS "public"."quizzes";
CREATE TABLE "public"."quizzes" (
  "id" int4 NOT NULL DEFAULT nextval('quizzes_id_seq'::regclass),
  "lesson_id" int4 NOT NULL,
  "title" varchar(500) COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default",
  "pass_percentage" int4 DEFAULT 70,
  "time_limit_minutes" int4,
  "max_attempts" int4 DEFAULT 3,
  "show_correct_answers" bool DEFAULT true,
  "randomize_questions" bool DEFAULT false,
  "is_published" bool DEFAULT true,
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."quizzes" OWNER TO "postgres";

-- ----------------------------
-- Table structure for refunds
-- ----------------------------
DROP TABLE IF EXISTS "public"."refunds";
CREATE TABLE "public"."refunds" (
  "id" int8 NOT NULL DEFAULT nextval('refunds_id_seq'::regclass),
  "payment_id" int8 NOT NULL,
  "user_id" int8 NOT NULL,
  "amount" numeric(10,2) NOT NULL,
  "currency" varchar(3) COLLATE "pg_catalog"."default" DEFAULT 'LKR'::character varying,
  "reason" text COLLATE "pg_catalog"."default",
  "status" varchar(20) COLLATE "pg_catalog"."default" DEFAULT 'pending'::character varying,
  "processed_by" int8,
  "processed_at" timestamp(6),
  "gateway_refund_id" varchar(255) COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."refunds" OWNER TO "postgres";

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS "public"."tags";
CREATE TABLE "public"."tags" (
  "id" int4 NOT NULL DEFAULT nextval('tags_id_seq'::regclass),
  "slug" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."tags" OWNER TO "postgres";

-- ----------------------------
-- Table structure for user_sessions
-- ----------------------------
DROP TABLE IF EXISTS "public"."user_sessions";
CREATE TABLE "public"."user_sessions" (
  "id" int8 NOT NULL DEFAULT nextval('user_sessions_id_seq'::regclass),
  "user_id" int8 NOT NULL,
  "token" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar(100) COLLATE "pg_catalog"."default",
  "ip_address" inet,
  "user_agent" text COLLATE "pg_catalog"."default",
  "last_activity" timestamp(6) DEFAULT now(),
  "expires_at" timestamp(6) NOT NULL,
  "created_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."user_sessions" OWNER TO "postgres";

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "id" int8 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
  "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "phone" varchar(20) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "first_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "last_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "avatar_url" text COLLATE "pg_catalog"."default",
  "email_verified_at" timestamp(6),
  "phone_verified_at" timestamp(6),
  "role" varchar(20) COLLATE "pg_catalog"."default" DEFAULT 'student'::character varying,
  "status" varchar(20) COLLATE "pg_catalog"."default" DEFAULT 'active'::character varying,
  "timezone" varchar(50) COLLATE "pg_catalog"."default" DEFAULT 'Asia/Colombo'::character varying,
  "language" varchar(5) COLLATE "pg_catalog"."default" DEFAULT 'en'::character varying,
  "last_login_at" timestamp(6),
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."users" OWNER TO "postgres";
COMMENT ON TABLE "public"."users" IS 'Main users table - students, instructors, and admins';

-- ----------------------------
-- Table structure for wishlist
-- ----------------------------
DROP TABLE IF EXISTS "public"."wishlist";
CREATE TABLE "public"."wishlist" (
  "id" int8 NOT NULL DEFAULT nextval('wishlist_id_seq'::regclass),
  "user_id" int8 NOT NULL,
  "course_id" int4 NOT NULL,
  "created_at" timestamp(6) DEFAULT now()
)
;
ALTER TABLE "public"."wishlist" OWNER TO "postgres";

-- ----------------------------
-- Function structure for gin_extract_query_trgm
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gin_extract_query_trgm"(text, internal, int2, internal, internal, internal, internal);
CREATE OR REPLACE FUNCTION "public"."gin_extract_query_trgm"(text, internal, int2, internal, internal, internal, internal)
  RETURNS "pg_catalog"."internal" AS '$libdir/pg_trgm', 'gin_extract_query_trgm'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."gin_extract_query_trgm"(text, internal, int2, internal, internal, internal, internal) OWNER TO "postgres";

-- ----------------------------
-- Function structure for gin_extract_value_trgm
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gin_extract_value_trgm"(text, internal);
CREATE OR REPLACE FUNCTION "public"."gin_extract_value_trgm"(text, internal)
  RETURNS "pg_catalog"."internal" AS '$libdir/pg_trgm', 'gin_extract_value_trgm'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."gin_extract_value_trgm"(text, internal) OWNER TO "postgres";

-- ----------------------------
-- Function structure for gin_trgm_consistent
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gin_trgm_consistent"(internal, int2, text, int4, internal, internal, internal, internal);
CREATE OR REPLACE FUNCTION "public"."gin_trgm_consistent"(internal, int2, text, int4, internal, internal, internal, internal)
  RETURNS "pg_catalog"."bool" AS '$libdir/pg_trgm', 'gin_trgm_consistent'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."gin_trgm_consistent"(internal, int2, text, int4, internal, internal, internal, internal) OWNER TO "postgres";

-- ----------------------------
-- Function structure for gin_trgm_triconsistent
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gin_trgm_triconsistent"(internal, int2, text, int4, internal, internal, internal);
CREATE OR REPLACE FUNCTION "public"."gin_trgm_triconsistent"(internal, int2, text, int4, internal, internal, internal)
  RETURNS "pg_catalog"."char" AS '$libdir/pg_trgm', 'gin_trgm_triconsistent'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."gin_trgm_triconsistent"(internal, int2, text, int4, internal, internal, internal) OWNER TO "postgres";

-- ----------------------------
-- Function structure for gtrgm_compress
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gtrgm_compress"(internal);
CREATE OR REPLACE FUNCTION "public"."gtrgm_compress"(internal)
  RETURNS "pg_catalog"."internal" AS '$libdir/pg_trgm', 'gtrgm_compress'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."gtrgm_compress"(internal) OWNER TO "postgres";

-- ----------------------------
-- Function structure for gtrgm_consistent
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gtrgm_consistent"(internal, text, int2, oid, internal);
CREATE OR REPLACE FUNCTION "public"."gtrgm_consistent"(internal, text, int2, oid, internal)
  RETURNS "pg_catalog"."bool" AS '$libdir/pg_trgm', 'gtrgm_consistent'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."gtrgm_consistent"(internal, text, int2, oid, internal) OWNER TO "postgres";

-- ----------------------------
-- Function structure for gtrgm_decompress
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gtrgm_decompress"(internal);
CREATE OR REPLACE FUNCTION "public"."gtrgm_decompress"(internal)
  RETURNS "pg_catalog"."internal" AS '$libdir/pg_trgm', 'gtrgm_decompress'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."gtrgm_decompress"(internal) OWNER TO "postgres";

-- ----------------------------
-- Function structure for gtrgm_distance
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gtrgm_distance"(internal, text, int2, oid, internal);
CREATE OR REPLACE FUNCTION "public"."gtrgm_distance"(internal, text, int2, oid, internal)
  RETURNS "pg_catalog"."float8" AS '$libdir/pg_trgm', 'gtrgm_distance'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."gtrgm_distance"(internal, text, int2, oid, internal) OWNER TO "postgres";

-- ----------------------------
-- Function structure for gtrgm_in
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gtrgm_in"(cstring);
CREATE OR REPLACE FUNCTION "public"."gtrgm_in"(cstring)
  RETURNS "public"."gtrgm" AS '$libdir/pg_trgm', 'gtrgm_in'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."gtrgm_in"(cstring) OWNER TO "postgres";

-- ----------------------------
-- Function structure for gtrgm_options
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gtrgm_options"(internal);
CREATE OR REPLACE FUNCTION "public"."gtrgm_options"(internal)
  RETURNS "pg_catalog"."void" AS '$libdir/pg_trgm', 'gtrgm_options'
  LANGUAGE c IMMUTABLE
  COST 1;
ALTER FUNCTION "public"."gtrgm_options"(internal) OWNER TO "postgres";

-- ----------------------------
-- Function structure for gtrgm_out
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gtrgm_out"("public"."gtrgm");
CREATE OR REPLACE FUNCTION "public"."gtrgm_out"("public"."gtrgm")
  RETURNS "pg_catalog"."cstring" AS '$libdir/pg_trgm', 'gtrgm_out'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."gtrgm_out"("public"."gtrgm") OWNER TO "postgres";

-- ----------------------------
-- Function structure for gtrgm_penalty
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gtrgm_penalty"(internal, internal, internal);
CREATE OR REPLACE FUNCTION "public"."gtrgm_penalty"(internal, internal, internal)
  RETURNS "pg_catalog"."internal" AS '$libdir/pg_trgm', 'gtrgm_penalty'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."gtrgm_penalty"(internal, internal, internal) OWNER TO "postgres";

-- ----------------------------
-- Function structure for gtrgm_picksplit
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gtrgm_picksplit"(internal, internal);
CREATE OR REPLACE FUNCTION "public"."gtrgm_picksplit"(internal, internal)
  RETURNS "pg_catalog"."internal" AS '$libdir/pg_trgm', 'gtrgm_picksplit'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."gtrgm_picksplit"(internal, internal) OWNER TO "postgres";

-- ----------------------------
-- Function structure for gtrgm_same
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gtrgm_same"("public"."gtrgm", "public"."gtrgm", internal);
CREATE OR REPLACE FUNCTION "public"."gtrgm_same"("public"."gtrgm", "public"."gtrgm", internal)
  RETURNS "pg_catalog"."internal" AS '$libdir/pg_trgm', 'gtrgm_same'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."gtrgm_same"("public"."gtrgm", "public"."gtrgm", internal) OWNER TO "postgres";

-- ----------------------------
-- Function structure for gtrgm_union
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."gtrgm_union"(internal, internal);
CREATE OR REPLACE FUNCTION "public"."gtrgm_union"(internal, internal)
  RETURNS "public"."gtrgm" AS '$libdir/pg_trgm', 'gtrgm_union'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."gtrgm_union"(internal, internal) OWNER TO "postgres";

-- ----------------------------
-- Function structure for set_limit
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."set_limit"(float4);
CREATE OR REPLACE FUNCTION "public"."set_limit"(float4)
  RETURNS "pg_catalog"."float4" AS '$libdir/pg_trgm', 'set_limit'
  LANGUAGE c VOLATILE STRICT
  COST 1;
ALTER FUNCTION "public"."set_limit"(float4) OWNER TO "postgres";

-- ----------------------------
-- Function structure for show_limit
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."show_limit"();
CREATE OR REPLACE FUNCTION "public"."show_limit"()
  RETURNS "pg_catalog"."float4" AS '$libdir/pg_trgm', 'show_limit'
  LANGUAGE c STABLE STRICT
  COST 1;
ALTER FUNCTION "public"."show_limit"() OWNER TO "postgres";

-- ----------------------------
-- Function structure for show_trgm
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."show_trgm"(text);
CREATE OR REPLACE FUNCTION "public"."show_trgm"(text)
  RETURNS "pg_catalog"."_text" AS '$libdir/pg_trgm', 'show_trgm'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."show_trgm"(text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for similarity
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."similarity"(text, text);
CREATE OR REPLACE FUNCTION "public"."similarity"(text, text)
  RETURNS "pg_catalog"."float4" AS '$libdir/pg_trgm', 'similarity'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."similarity"(text, text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for similarity_dist
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."similarity_dist"(text, text);
CREATE OR REPLACE FUNCTION "public"."similarity_dist"(text, text)
  RETURNS "pg_catalog"."float4" AS '$libdir/pg_trgm', 'similarity_dist'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."similarity_dist"(text, text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for similarity_op
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."similarity_op"(text, text);
CREATE OR REPLACE FUNCTION "public"."similarity_op"(text, text)
  RETURNS "pg_catalog"."bool" AS '$libdir/pg_trgm', 'similarity_op'
  LANGUAGE c STABLE STRICT
  COST 1;
ALTER FUNCTION "public"."similarity_op"(text, text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for strict_word_similarity
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."strict_word_similarity"(text, text);
CREATE OR REPLACE FUNCTION "public"."strict_word_similarity"(text, text)
  RETURNS "pg_catalog"."float4" AS '$libdir/pg_trgm', 'strict_word_similarity'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."strict_word_similarity"(text, text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for strict_word_similarity_commutator_op
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."strict_word_similarity_commutator_op"(text, text);
CREATE OR REPLACE FUNCTION "public"."strict_word_similarity_commutator_op"(text, text)
  RETURNS "pg_catalog"."bool" AS '$libdir/pg_trgm', 'strict_word_similarity_commutator_op'
  LANGUAGE c STABLE STRICT
  COST 1;
ALTER FUNCTION "public"."strict_word_similarity_commutator_op"(text, text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for strict_word_similarity_dist_commutator_op
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."strict_word_similarity_dist_commutator_op"(text, text);
CREATE OR REPLACE FUNCTION "public"."strict_word_similarity_dist_commutator_op"(text, text)
  RETURNS "pg_catalog"."float4" AS '$libdir/pg_trgm', 'strict_word_similarity_dist_commutator_op'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."strict_word_similarity_dist_commutator_op"(text, text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for strict_word_similarity_dist_op
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."strict_word_similarity_dist_op"(text, text);
CREATE OR REPLACE FUNCTION "public"."strict_word_similarity_dist_op"(text, text)
  RETURNS "pg_catalog"."float4" AS '$libdir/pg_trgm', 'strict_word_similarity_dist_op'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."strict_word_similarity_dist_op"(text, text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for strict_word_similarity_op
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."strict_word_similarity_op"(text, text);
CREATE OR REPLACE FUNCTION "public"."strict_word_similarity_op"(text, text)
  RETURNS "pg_catalog"."bool" AS '$libdir/pg_trgm', 'strict_word_similarity_op'
  LANGUAGE c STABLE STRICT
  COST 1;
ALTER FUNCTION "public"."strict_word_similarity_op"(text, text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for update_updated_at_column
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."update_updated_at_column"();
CREATE OR REPLACE FUNCTION "public"."update_updated_at_column"()
  RETURNS "pg_catalog"."trigger" AS $BODY$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION "public"."update_updated_at_column"() OWNER TO "postgres";

-- ----------------------------
-- Function structure for uuid_generate_v1
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v1"();
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v1"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v1'
  LANGUAGE c VOLATILE STRICT
  COST 1;
ALTER FUNCTION "public"."uuid_generate_v1"() OWNER TO "postgres";

-- ----------------------------
-- Function structure for uuid_generate_v1mc
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v1mc"();
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v1mc"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v1mc'
  LANGUAGE c VOLATILE STRICT
  COST 1;
ALTER FUNCTION "public"."uuid_generate_v1mc"() OWNER TO "postgres";

-- ----------------------------
-- Function structure for uuid_generate_v3
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v3"("namespace" uuid, "name" text);
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v3"("namespace" uuid, "name" text)
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v3'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."uuid_generate_v3"("namespace" uuid, "name" text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for uuid_generate_v4
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v4"();
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v4"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v4'
  LANGUAGE c VOLATILE STRICT
  COST 1;
ALTER FUNCTION "public"."uuid_generate_v4"() OWNER TO "postgres";

-- ----------------------------
-- Function structure for uuid_generate_v5
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v5"("namespace" uuid, "name" text);
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v5"("namespace" uuid, "name" text)
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v5'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."uuid_generate_v5"("namespace" uuid, "name" text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for uuid_nil
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_nil"();
CREATE OR REPLACE FUNCTION "public"."uuid_nil"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_nil'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."uuid_nil"() OWNER TO "postgres";

-- ----------------------------
-- Function structure for uuid_ns_dns
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_dns"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_dns"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_dns'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."uuid_ns_dns"() OWNER TO "postgres";

-- ----------------------------
-- Function structure for uuid_ns_oid
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_oid"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_oid"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_oid'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."uuid_ns_oid"() OWNER TO "postgres";

-- ----------------------------
-- Function structure for uuid_ns_url
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_url"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_url"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_url'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."uuid_ns_url"() OWNER TO "postgres";

-- ----------------------------
-- Function structure for uuid_ns_x500
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_x500"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_x500"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_x500'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."uuid_ns_x500"() OWNER TO "postgres";

-- ----------------------------
-- Function structure for word_similarity
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."word_similarity"(text, text);
CREATE OR REPLACE FUNCTION "public"."word_similarity"(text, text)
  RETURNS "pg_catalog"."float4" AS '$libdir/pg_trgm', 'word_similarity'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."word_similarity"(text, text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for word_similarity_commutator_op
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."word_similarity_commutator_op"(text, text);
CREATE OR REPLACE FUNCTION "public"."word_similarity_commutator_op"(text, text)
  RETURNS "pg_catalog"."bool" AS '$libdir/pg_trgm', 'word_similarity_commutator_op'
  LANGUAGE c STABLE STRICT
  COST 1;
ALTER FUNCTION "public"."word_similarity_commutator_op"(text, text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for word_similarity_dist_commutator_op
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."word_similarity_dist_commutator_op"(text, text);
CREATE OR REPLACE FUNCTION "public"."word_similarity_dist_commutator_op"(text, text)
  RETURNS "pg_catalog"."float4" AS '$libdir/pg_trgm', 'word_similarity_dist_commutator_op'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."word_similarity_dist_commutator_op"(text, text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for word_similarity_dist_op
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."word_similarity_dist_op"(text, text);
CREATE OR REPLACE FUNCTION "public"."word_similarity_dist_op"(text, text)
  RETURNS "pg_catalog"."float4" AS '$libdir/pg_trgm', 'word_similarity_dist_op'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;
ALTER FUNCTION "public"."word_similarity_dist_op"(text, text) OWNER TO "postgres";

-- ----------------------------
-- Function structure for word_similarity_op
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."word_similarity_op"(text, text);
CREATE OR REPLACE FUNCTION "public"."word_similarity_op"(text, text)
  RETURNS "pg_catalog"."bool" AS '$libdir/pg_trgm', 'word_similarity_op'
  LANGUAGE c STABLE STRICT
  COST 1;
ALTER FUNCTION "public"."word_similarity_op"(text, text) OWNER TO "postgres";

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."activity_logs_id_seq"
OWNED BY "public"."activity_logs"."id";
SELECT setval('"public"."activity_logs_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."categories_id_seq"
OWNED BY "public"."categories"."id";
SELECT setval('"public"."categories_id_seq"', 4, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."certificates_id_seq"
OWNED BY "public"."certificates"."id";
SELECT setval('"public"."certificates_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."course_reviews_id_seq"
OWNED BY "public"."course_reviews"."id";
SELECT setval('"public"."course_reviews_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."courses_id_seq"
OWNED BY "public"."courses"."id";
SELECT setval('"public"."courses_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."email_verifications_id_seq"
OWNED BY "public"."email_verifications"."id";
SELECT setval('"public"."email_verifications_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."enrollments_id_seq"
OWNED BY "public"."enrollments"."id";
SELECT setval('"public"."enrollments_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."lesson_progress_id_seq"
OWNED BY "public"."lesson_progress"."id";
SELECT setval('"public"."lesson_progress_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."lesson_resources_id_seq"
OWNED BY "public"."lesson_resources"."id";
SELECT setval('"public"."lesson_resources_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."lessons_id_seq"
OWNED BY "public"."lessons"."id";
SELECT setval('"public"."lessons_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."modules_id_seq"
OWNED BY "public"."modules"."id";
SELECT setval('"public"."modules_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."notifications_id_seq"
OWNED BY "public"."notifications"."id";
SELECT setval('"public"."notifications_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."password_resets_id_seq"
OWNED BY "public"."password_resets"."id";
SELECT setval('"public"."password_resets_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."payments_id_seq"
OWNED BY "public"."payments"."id";
SELECT setval('"public"."payments_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."phone_verifications_id_seq"
OWNED BY "public"."phone_verifications"."id";
SELECT setval('"public"."phone_verifications_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."question_options_id_seq"
OWNED BY "public"."question_options"."id";
SELECT setval('"public"."question_options_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."quiz_answers_id_seq"
OWNED BY "public"."quiz_answers"."id";
SELECT setval('"public"."quiz_answers_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."quiz_attempts_id_seq"
OWNED BY "public"."quiz_attempts"."id";
SELECT setval('"public"."quiz_attempts_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."quiz_questions_id_seq"
OWNED BY "public"."quiz_questions"."id";
SELECT setval('"public"."quiz_questions_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."quizzes_id_seq"
OWNED BY "public"."quizzes"."id";
SELECT setval('"public"."quizzes_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."refunds_id_seq"
OWNED BY "public"."refunds"."id";
SELECT setval('"public"."refunds_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tags_id_seq"
OWNED BY "public"."tags"."id";
SELECT setval('"public"."tags_id_seq"', 6, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."user_sessions_id_seq"
OWNED BY "public"."user_sessions"."id";
SELECT setval('"public"."user_sessions_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."users_id_seq"
OWNED BY "public"."users"."id";
SELECT setval('"public"."users_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."wishlist_id_seq"
OWNED BY "public"."wishlist"."id";
SELECT setval('"public"."wishlist_id_seq"', 1, false);

-- ----------------------------
-- Indexes structure for table activity_logs
-- ----------------------------
CREATE INDEX "idx_logs_action" ON "public"."activity_logs" USING btree (
  "action" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_logs_created" ON "public"."activity_logs" USING btree (
  "created_at" "pg_catalog"."timestamp_ops" ASC NULLS LAST
);
CREATE INDEX "idx_logs_user" ON "public"."activity_logs" USING btree (
  "user_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table activity_logs
-- ----------------------------
ALTER TABLE "public"."activity_logs" ADD CONSTRAINT "activity_logs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table categories
-- ----------------------------
CREATE INDEX "idx_categories_parent" ON "public"."categories" USING btree (
  "parent_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_categories_slug" ON "public"."categories" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Triggers structure for table categories
-- ----------------------------
CREATE TRIGGER "update_categories_updated_at" BEFORE UPDATE ON "public"."categories"
FOR EACH ROW
EXECUTE PROCEDURE "public"."update_updated_at_column"();

-- ----------------------------
-- Uniques structure for table categories
-- ----------------------------
ALTER TABLE "public"."categories" ADD CONSTRAINT "categories_slug_key" UNIQUE ("slug");

-- ----------------------------
-- Primary Key structure for table categories
-- ----------------------------
ALTER TABLE "public"."categories" ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table certificates
-- ----------------------------
CREATE INDEX "idx_certificates_course" ON "public"."certificates" USING btree (
  "course_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_certificates_number" ON "public"."certificates" USING btree (
  "certificate_number" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_certificates_user" ON "public"."certificates" USING btree (
  "user_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- ----------------------------
-- Uniques structure for table certificates
-- ----------------------------
ALTER TABLE "public"."certificates" ADD CONSTRAINT "certificates_uuid_key" UNIQUE ("uuid");
ALTER TABLE "public"."certificates" ADD CONSTRAINT "certificates_certificate_number_key" UNIQUE ("certificate_number");
ALTER TABLE "public"."certificates" ADD CONSTRAINT "certificates_verification_code_key" UNIQUE ("verification_code");

-- ----------------------------
-- Primary Key structure for table certificates
-- ----------------------------
ALTER TABLE "public"."certificates" ADD CONSTRAINT "certificates_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table course_reviews
-- ----------------------------
CREATE INDEX "idx_reviews_course" ON "public"."course_reviews" USING btree (
  "course_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_reviews_rating" ON "public"."course_reviews" USING btree (
  "rating" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Triggers structure for table course_reviews
-- ----------------------------
CREATE TRIGGER "update_course_reviews_updated_at" BEFORE UPDATE ON "public"."course_reviews"
FOR EACH ROW
EXECUTE PROCEDURE "public"."update_updated_at_column"();

-- ----------------------------
-- Uniques structure for table course_reviews
-- ----------------------------
ALTER TABLE "public"."course_reviews" ADD CONSTRAINT "course_reviews_user_id_course_id_key" UNIQUE ("user_id", "course_id");

-- ----------------------------
-- Checks structure for table course_reviews
-- ----------------------------
ALTER TABLE "public"."course_reviews" ADD CONSTRAINT "course_reviews_rating_check" CHECK (rating >= 1 AND rating <= 5);

-- ----------------------------
-- Primary Key structure for table course_reviews
-- ----------------------------
ALTER TABLE "public"."course_reviews" ADD CONSTRAINT "course_reviews_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table course_tags
-- ----------------------------
CREATE INDEX "idx_course_tags_course" ON "public"."course_tags" USING btree (
  "course_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_course_tags_tag" ON "public"."course_tags" USING btree (
  "tag_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table course_tags
-- ----------------------------
ALTER TABLE "public"."course_tags" ADD CONSTRAINT "course_tags_pkey" PRIMARY KEY ("course_id", "tag_id");

-- ----------------------------
-- Indexes structure for table courses
-- ----------------------------
CREATE INDEX "idx_courses_category" ON "public"."courses" USING btree (
  "category_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_courses_instructor" ON "public"."courses" USING btree (
  "instructor_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);
CREATE INDEX "idx_courses_level" ON "public"."courses" USING btree (
  "level" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_courses_published" ON "public"."courses" USING btree (
  "is_published" "pg_catalog"."bool_ops" ASC NULLS LAST
);
CREATE INDEX "idx_courses_search" ON "public"."courses" USING gin (
  to_tsvector('english'::regconfig, (title::text || ' '::text) || COALESCE(description, ''::text)) "pg_catalog"."tsvector_ops"
);
CREATE INDEX "idx_courses_slug" ON "public"."courses" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Triggers structure for table courses
-- ----------------------------
CREATE TRIGGER "update_courses_updated_at" BEFORE UPDATE ON "public"."courses"
FOR EACH ROW
EXECUTE PROCEDURE "public"."update_updated_at_column"();

-- ----------------------------
-- Uniques structure for table courses
-- ----------------------------
ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_uuid_key" UNIQUE ("uuid");
ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_slug_key" UNIQUE ("slug");

-- ----------------------------
-- Checks structure for table courses
-- ----------------------------
ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_language_check" CHECK (language::text = ANY (ARRAY['si'::character varying, 'en'::character varying, 'ta'::character varying]::text[]));
ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_level_check" CHECK (level::text = ANY (ARRAY['beginner'::character varying, 'intermediate'::character varying, 'advanced'::character varying]::text[]));

-- ----------------------------
-- Primary Key structure for table courses
-- ----------------------------
ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table email_verifications
-- ----------------------------
CREATE INDEX "idx_email_ver_code" ON "public"."email_verifications" USING btree (
  "code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_email_ver_user" ON "public"."email_verifications" USING btree (
  "user_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table email_verifications
-- ----------------------------
ALTER TABLE "public"."email_verifications" ADD CONSTRAINT "email_verifications_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table enrollments
-- ----------------------------
CREATE INDEX "idx_enrollments_course" ON "public"."enrollments" USING btree (
  "course_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_enrollments_payment" ON "public"."enrollments" USING btree (
  "payment_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);
CREATE INDEX "idx_enrollments_status" ON "public"."enrollments" USING btree (
  "status" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_enrollments_user" ON "public"."enrollments" USING btree (
  "user_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- ----------------------------
-- Triggers structure for table enrollments
-- ----------------------------
CREATE TRIGGER "update_enrollments_updated_at" BEFORE UPDATE ON "public"."enrollments"
FOR EACH ROW
EXECUTE PROCEDURE "public"."update_updated_at_column"();

-- ----------------------------
-- Uniques structure for table enrollments
-- ----------------------------
ALTER TABLE "public"."enrollments" ADD CONSTRAINT "enrollments_uuid_key" UNIQUE ("uuid");
ALTER TABLE "public"."enrollments" ADD CONSTRAINT "enrollments_user_id_course_id_key" UNIQUE ("user_id", "course_id");

-- ----------------------------
-- Checks structure for table enrollments
-- ----------------------------
ALTER TABLE "public"."enrollments" ADD CONSTRAINT "enrollments_progress_percentage_check" CHECK (progress_percentage >= 0 AND progress_percentage <= 100);
ALTER TABLE "public"."enrollments" ADD CONSTRAINT "enrollments_status_check" CHECK (status::text = ANY (ARRAY['active'::character varying, 'completed'::character varying, 'refunded'::character varying, 'expired'::character varying]::text[]));

-- ----------------------------
-- Primary Key structure for table enrollments
-- ----------------------------
ALTER TABLE "public"."enrollments" ADD CONSTRAINT "enrollments_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table lesson_progress
-- ----------------------------
CREATE INDEX "idx_progress_completed" ON "public"."lesson_progress" USING btree (
  "is_completed" "pg_catalog"."bool_ops" ASC NULLS LAST
);
CREATE INDEX "idx_progress_enrollment" ON "public"."lesson_progress" USING btree (
  "enrollment_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);
CREATE INDEX "idx_progress_lesson" ON "public"."lesson_progress" USING btree (
  "lesson_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_progress_user" ON "public"."lesson_progress" USING btree (
  "user_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- ----------------------------
-- Triggers structure for table lesson_progress
-- ----------------------------
CREATE TRIGGER "update_lesson_progress_updated_at" BEFORE UPDATE ON "public"."lesson_progress"
FOR EACH ROW
EXECUTE PROCEDURE "public"."update_updated_at_column"();

-- ----------------------------
-- Uniques structure for table lesson_progress
-- ----------------------------
ALTER TABLE "public"."lesson_progress" ADD CONSTRAINT "lesson_progress_user_id_lesson_id_key" UNIQUE ("user_id", "lesson_id");

-- ----------------------------
-- Primary Key structure for table lesson_progress
-- ----------------------------
ALTER TABLE "public"."lesson_progress" ADD CONSTRAINT "lesson_progress_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table lesson_resources
-- ----------------------------
CREATE INDEX "idx_resources_lesson" ON "public"."lesson_resources" USING btree (
  "lesson_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table lesson_resources
-- ----------------------------
ALTER TABLE "public"."lesson_resources" ADD CONSTRAINT "lesson_resources_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table lessons
-- ----------------------------
CREATE INDEX "idx_lessons_module" ON "public"."lessons" USING btree (
  "module_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_lessons_order" ON "public"."lessons" USING btree (
  "module_id" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "sort_order" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_lessons_preview" ON "public"."lessons" USING btree (
  "is_free_preview" "pg_catalog"."bool_ops" ASC NULLS LAST
);

-- ----------------------------
-- Triggers structure for table lessons
-- ----------------------------
CREATE TRIGGER "update_lessons_updated_at" BEFORE UPDATE ON "public"."lessons"
FOR EACH ROW
EXECUTE PROCEDURE "public"."update_updated_at_column"();

-- ----------------------------
-- Uniques structure for table lessons
-- ----------------------------
ALTER TABLE "public"."lessons" ADD CONSTRAINT "lessons_uuid_key" UNIQUE ("uuid");

-- ----------------------------
-- Checks structure for table lessons
-- ----------------------------
ALTER TABLE "public"."lessons" ADD CONSTRAINT "lessons_video_type_check" CHECK (video_type::text = ANY (ARRAY['bunny'::character varying, 'youtube'::character varying, 'vimeo'::character varying, 'none'::character varying]::text[]));

-- ----------------------------
-- Primary Key structure for table lessons
-- ----------------------------
ALTER TABLE "public"."lessons" ADD CONSTRAINT "lessons_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table modules
-- ----------------------------
CREATE INDEX "idx_modules_course" ON "public"."modules" USING btree (
  "course_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_modules_order" ON "public"."modules" USING btree (
  "course_id" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "sort_order" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Triggers structure for table modules
-- ----------------------------
CREATE TRIGGER "update_modules_updated_at" BEFORE UPDATE ON "public"."modules"
FOR EACH ROW
EXECUTE PROCEDURE "public"."update_updated_at_column"();

-- ----------------------------
-- Primary Key structure for table modules
-- ----------------------------
ALTER TABLE "public"."modules" ADD CONSTRAINT "modules_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table notifications
-- ----------------------------
CREATE INDEX "idx_notifications_read" ON "public"."notifications" USING btree (
  "is_read" "pg_catalog"."bool_ops" ASC NULLS LAST
);
CREATE INDEX "idx_notifications_user" ON "public"."notifications" USING btree (
  "user_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table notifications
-- ----------------------------
ALTER TABLE "public"."notifications" ADD CONSTRAINT "notifications_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table password_resets
-- ----------------------------
CREATE INDEX "idx_pwd_reset_token" ON "public"."password_resets" USING btree (
  "token" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_pwd_reset_user" ON "public"."password_resets" USING btree (
  "user_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table password_resets
-- ----------------------------
ALTER TABLE "public"."password_resets" ADD CONSTRAINT "password_resets_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table payments
-- ----------------------------
CREATE INDEX "idx_payments_course" ON "public"."payments" USING btree (
  "course_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_payments_status" ON "public"."payments" USING btree (
  "status" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_payments_user" ON "public"."payments" USING btree (
  "user_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- ----------------------------
-- Triggers structure for table payments
-- ----------------------------
CREATE TRIGGER "update_payments_updated_at" BEFORE UPDATE ON "public"."payments"
FOR EACH ROW
EXECUTE PROCEDURE "public"."update_updated_at_column"();

-- ----------------------------
-- Uniques structure for table payments
-- ----------------------------
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_uuid_key" UNIQUE ("uuid");

-- ----------------------------
-- Checks structure for table payments
-- ----------------------------
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_status_check" CHECK (status::text = ANY (ARRAY['pending'::character varying, 'completed'::character varying, 'failed'::character varying, 'refunded'::character varying]::text[]));

-- ----------------------------
-- Primary Key structure for table payments
-- ----------------------------
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table phone_verifications
-- ----------------------------
CREATE INDEX "idx_phone_ver_code" ON "public"."phone_verifications" USING btree (
  "code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_phone_ver_user" ON "public"."phone_verifications" USING btree (
  "user_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table phone_verifications
-- ----------------------------
ALTER TABLE "public"."phone_verifications" ADD CONSTRAINT "phone_verifications_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table question_options
-- ----------------------------
CREATE INDEX "idx_options_question" ON "public"."question_options" USING btree (
  "question_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table question_options
-- ----------------------------
ALTER TABLE "public"."question_options" ADD CONSTRAINT "question_options_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table quiz_answers
-- ----------------------------
CREATE INDEX "idx_answers_attempt" ON "public"."quiz_answers" USING btree (
  "attempt_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table quiz_answers
-- ----------------------------
ALTER TABLE "public"."quiz_answers" ADD CONSTRAINT "quiz_answers_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table quiz_attempts
-- ----------------------------
CREATE INDEX "idx_attempts_quiz" ON "public"."quiz_attempts" USING btree (
  "quiz_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_attempts_user" ON "public"."quiz_attempts" USING btree (
  "user_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- ----------------------------
-- Checks structure for table quiz_attempts
-- ----------------------------
ALTER TABLE "public"."quiz_attempts" ADD CONSTRAINT "quiz_attempts_status_check" CHECK (status::text = ANY (ARRAY['in_progress'::character varying, 'completed'::character varying, 'abandoned'::character varying]::text[]));

-- ----------------------------
-- Primary Key structure for table quiz_attempts
-- ----------------------------
ALTER TABLE "public"."quiz_attempts" ADD CONSTRAINT "quiz_attempts_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table quiz_questions
-- ----------------------------
CREATE INDEX "idx_questions_quiz" ON "public"."quiz_questions" USING btree (
  "quiz_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Triggers structure for table quiz_questions
-- ----------------------------
CREATE TRIGGER "update_quiz_questions_updated_at" BEFORE UPDATE ON "public"."quiz_questions"
FOR EACH ROW
EXECUTE PROCEDURE "public"."update_updated_at_column"();

-- ----------------------------
-- Checks structure for table quiz_questions
-- ----------------------------
ALTER TABLE "public"."quiz_questions" ADD CONSTRAINT "quiz_questions_question_type_check" CHECK (question_type::text = ANY (ARRAY['multiple_choice'::character varying, 'true_false'::character varying, 'short_answer'::character varying, 'multi_select'::character varying]::text[]));

-- ----------------------------
-- Primary Key structure for table quiz_questions
-- ----------------------------
ALTER TABLE "public"."quiz_questions" ADD CONSTRAINT "quiz_questions_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table quizzes
-- ----------------------------
CREATE INDEX "idx_quizzes_lesson" ON "public"."quizzes" USING btree (
  "lesson_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Triggers structure for table quizzes
-- ----------------------------
CREATE TRIGGER "update_quizzes_updated_at" BEFORE UPDATE ON "public"."quizzes"
FOR EACH ROW
EXECUTE PROCEDURE "public"."update_updated_at_column"();

-- ----------------------------
-- Checks structure for table quizzes
-- ----------------------------
ALTER TABLE "public"."quizzes" ADD CONSTRAINT "quizzes_pass_percentage_check" CHECK (pass_percentage >= 0 AND pass_percentage <= 100);

-- ----------------------------
-- Primary Key structure for table quizzes
-- ----------------------------
ALTER TABLE "public"."quizzes" ADD CONSTRAINT "quizzes_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table refunds
-- ----------------------------
CREATE INDEX "idx_refunds_payment" ON "public"."refunds" USING btree (
  "payment_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);
CREATE INDEX "idx_refunds_status" ON "public"."refunds" USING btree (
  "status" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Triggers structure for table refunds
-- ----------------------------
CREATE TRIGGER "update_refunds_updated_at" BEFORE UPDATE ON "public"."refunds"
FOR EACH ROW
EXECUTE PROCEDURE "public"."update_updated_at_column"();

-- ----------------------------
-- Checks structure for table refunds
-- ----------------------------
ALTER TABLE "public"."refunds" ADD CONSTRAINT "refunds_status_check" CHECK (status::text = ANY (ARRAY['pending'::character varying, 'approved'::character varying, 'rejected'::character varying, 'completed'::character varying]::text[]));

-- ----------------------------
-- Primary Key structure for table refunds
-- ----------------------------
ALTER TABLE "public"."refunds" ADD CONSTRAINT "refunds_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table tags
-- ----------------------------
CREATE INDEX "idx_tags_slug" ON "public"."tags" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Uniques structure for table tags
-- ----------------------------
ALTER TABLE "public"."tags" ADD CONSTRAINT "tags_slug_key" UNIQUE ("slug");

-- ----------------------------
-- Primary Key structure for table tags
-- ----------------------------
ALTER TABLE "public"."tags" ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table user_sessions
-- ----------------------------
CREATE INDEX "idx_sessions_token" ON "public"."user_sessions" USING btree (
  "token" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_sessions_user" ON "public"."user_sessions" USING btree (
  "user_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- ----------------------------
-- Uniques structure for table user_sessions
-- ----------------------------
ALTER TABLE "public"."user_sessions" ADD CONSTRAINT "user_sessions_token_key" UNIQUE ("token");

-- ----------------------------
-- Primary Key structure for table user_sessions
-- ----------------------------
ALTER TABLE "public"."user_sessions" ADD CONSTRAINT "user_sessions_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table users
-- ----------------------------
CREATE INDEX "idx_users_email" ON "public"."users" USING btree (
  "email" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_users_phone" ON "public"."users" USING btree (
  "phone" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_users_role" ON "public"."users" USING btree (
  "role" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_users_status" ON "public"."users" USING btree (
  "status" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Triggers structure for table users
-- ----------------------------
CREATE TRIGGER "update_users_updated_at" BEFORE UPDATE ON "public"."users"
FOR EACH ROW
EXECUTE PROCEDURE "public"."update_updated_at_column"();

-- ----------------------------
-- Uniques structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_uuid_key" UNIQUE ("uuid");
ALTER TABLE "public"."users" ADD CONSTRAINT "users_email_key" UNIQUE ("email");
ALTER TABLE "public"."users" ADD CONSTRAINT "users_phone_key" UNIQUE ("phone");

-- ----------------------------
-- Checks structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_role_check" CHECK (role::text = ANY (ARRAY['student'::character varying, 'instructor'::character varying, 'admin'::character varying]::text[]));
ALTER TABLE "public"."users" ADD CONSTRAINT "users_status_check" CHECK (status::text = ANY (ARRAY['active'::character varying, 'suspended'::character varying, 'deleted'::character varying]::text[]));

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table wishlist
-- ----------------------------
CREATE INDEX "idx_wishlist_course" ON "public"."wishlist" USING btree (
  "course_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_wishlist_user" ON "public"."wishlist" USING btree (
  "user_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- ----------------------------
-- Uniques structure for table wishlist
-- ----------------------------
ALTER TABLE "public"."wishlist" ADD CONSTRAINT "wishlist_user_id_course_id_key" UNIQUE ("user_id", "course_id");

-- ----------------------------
-- Primary Key structure for table wishlist
-- ----------------------------
ALTER TABLE "public"."wishlist" ADD CONSTRAINT "wishlist_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table activity_logs
-- ----------------------------
ALTER TABLE "public"."activity_logs" ADD CONSTRAINT "activity_logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table categories
-- ----------------------------
ALTER TABLE "public"."categories" ADD CONSTRAINT "categories_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "public"."categories" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table certificates
-- ----------------------------
ALTER TABLE "public"."certificates" ADD CONSTRAINT "certificates_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."courses" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."certificates" ADD CONSTRAINT "certificates_enrollment_id_fkey" FOREIGN KEY ("enrollment_id") REFERENCES "public"."enrollments" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."certificates" ADD CONSTRAINT "certificates_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table course_reviews
-- ----------------------------
ALTER TABLE "public"."course_reviews" ADD CONSTRAINT "course_reviews_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."course_reviews" ADD CONSTRAINT "course_reviews_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."courses" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."course_reviews" ADD CONSTRAINT "course_reviews_enrollment_id_fkey" FOREIGN KEY ("enrollment_id") REFERENCES "public"."enrollments" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."course_reviews" ADD CONSTRAINT "course_reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table course_tags
-- ----------------------------
ALTER TABLE "public"."course_tags" ADD CONSTRAINT "course_tags_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."courses" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."course_tags" ADD CONSTRAINT "course_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "public"."tags" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table courses
-- ----------------------------
ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."categories" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_instructor_id_fkey" FOREIGN KEY ("instructor_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table email_verifications
-- ----------------------------
ALTER TABLE "public"."email_verifications" ADD CONSTRAINT "email_verifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table enrollments
-- ----------------------------
ALTER TABLE "public"."enrollments" ADD CONSTRAINT "enrollments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."courses" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."enrollments" ADD CONSTRAINT "enrollments_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "public"."payments" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."enrollments" ADD CONSTRAINT "enrollments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table lesson_progress
-- ----------------------------
ALTER TABLE "public"."lesson_progress" ADD CONSTRAINT "lesson_progress_enrollment_id_fkey" FOREIGN KEY ("enrollment_id") REFERENCES "public"."enrollments" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."lesson_progress" ADD CONSTRAINT "lesson_progress_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."lesson_progress" ADD CONSTRAINT "lesson_progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table lesson_resources
-- ----------------------------
ALTER TABLE "public"."lesson_resources" ADD CONSTRAINT "lesson_resources_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table lessons
-- ----------------------------
ALTER TABLE "public"."lessons" ADD CONSTRAINT "lessons_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "public"."modules" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table modules
-- ----------------------------
ALTER TABLE "public"."modules" ADD CONSTRAINT "modules_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."courses" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table notifications
-- ----------------------------
ALTER TABLE "public"."notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table password_resets
-- ----------------------------
ALTER TABLE "public"."password_resets" ADD CONSTRAINT "password_resets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table payments
-- ----------------------------
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."courses" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table phone_verifications
-- ----------------------------
ALTER TABLE "public"."phone_verifications" ADD CONSTRAINT "phone_verifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table question_options
-- ----------------------------
ALTER TABLE "public"."question_options" ADD CONSTRAINT "question_options_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "public"."quiz_questions" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table quiz_answers
-- ----------------------------
ALTER TABLE "public"."quiz_answers" ADD CONSTRAINT "quiz_answers_attempt_id_fkey" FOREIGN KEY ("attempt_id") REFERENCES "public"."quiz_attempts" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."quiz_answers" ADD CONSTRAINT "quiz_answers_option_id_fkey" FOREIGN KEY ("option_id") REFERENCES "public"."question_options" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."quiz_answers" ADD CONSTRAINT "quiz_answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "public"."quiz_questions" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table quiz_attempts
-- ----------------------------
ALTER TABLE "public"."quiz_attempts" ADD CONSTRAINT "quiz_attempts_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "public"."quizzes" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."quiz_attempts" ADD CONSTRAINT "quiz_attempts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table quiz_questions
-- ----------------------------
ALTER TABLE "public"."quiz_questions" ADD CONSTRAINT "quiz_questions_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "public"."quizzes" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table quizzes
-- ----------------------------
ALTER TABLE "public"."quizzes" ADD CONSTRAINT "quizzes_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table refunds
-- ----------------------------
ALTER TABLE "public"."refunds" ADD CONSTRAINT "refunds_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "public"."payments" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."refunds" ADD CONSTRAINT "refunds_processed_by_fkey" FOREIGN KEY ("processed_by") REFERENCES "public"."users" ("id") ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE "public"."refunds" ADD CONSTRAINT "refunds_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table user_sessions
-- ----------------------------
ALTER TABLE "public"."user_sessions" ADD CONSTRAINT "user_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table wishlist
-- ----------------------------
ALTER TABLE "public"."wishlist" ADD CONSTRAINT "wishlist_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."courses" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."wishlist" ADD CONSTRAINT "wishlist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
