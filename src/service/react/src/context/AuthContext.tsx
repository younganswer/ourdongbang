import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

type Me = {
	username: string;
	userId: string;
};
type AuthContextType = {};
