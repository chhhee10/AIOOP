
import { db } from "./db";
import {
  activities, notices, facilities, members, contactSubmissions,
  type Activity, type Notice, type Facility, type Member, type ContactSubmission,
  type InsertContactSubmission
} from "@shared/schema";

export interface IStorage {
  getActivities(): Promise<Activity[]>;
  getNotices(): Promise<Notice[]>;
  getFacilities(): Promise<Facility[]>;
  getMembers(): Promise<Member[]>;
  submitContact(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class DatabaseStorage implements IStorage {
  async getActivities(): Promise<Activity[]> {
    return await db.select().from(activities);
  }

  async getNotices(): Promise<Notice[]> {
    return await db.select().from(notices).orderBy(notices.date);
  }

  async getFacilities(): Promise<Facility[]> {
    return await db.select().from(facilities);
  }

  async getMembers(): Promise<Member[]> {
    return await db.select().from(members);
  }

  async submitContact(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [result] = await db.insert(contactSubmissions).values(submission).returning();
    return result;
  }
}

export const storage = new DatabaseStorage();
