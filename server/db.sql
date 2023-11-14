--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Homebrew)
-- Dumped by pg_dump version 14.9 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: players; Type: TABLE; Schema: public; Owner: tpl622_8
--

CREATE TABLE public.players (
    id integer NOT NULL,
    nickname character varying(255) NOT NULL,
    score character varying(50)
);


ALTER TABLE public.players OWNER TO tpl622_8;

--
-- Name: players_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl622_8
--

CREATE SEQUENCE public.players_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.players_id_seq OWNER TO tpl622_8;

--
-- Name: players_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl622_8
--

ALTER SEQUENCE public.players_id_seq OWNED BY public.players.id;


--
-- Name: players id; Type: DEFAULT; Schema: public; Owner: tpl622_8
--

ALTER TABLE ONLY public.players ALTER COLUMN id SET DEFAULT nextval('public.players_id_seq'::regclass);


--
-- Data for Name: players; Type: TABLE DATA; Schema: public; Owner: tpl622_8
--

COPY public.players (id, nickname, score) FROM stdin;
1	Beyza	50
\.


--
-- Name: players_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl622_8
--

SELECT pg_catalog.setval('public.players_id_seq', 1, true);


--
-- Name: players players_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl622_8
--

ALTER TABLE ONLY public.players
    ADD CONSTRAINT players_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

