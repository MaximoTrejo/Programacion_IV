import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class Supabase {
 private url = 'https://zwkckzgowowuzrlqifnz.supabase.co';
  private key =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3a2Nremdvd293dXpybHFpZm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MzYxMjcsImV4cCI6MjA3MjUxMjEyN30.U19fbjvpCmFS2V2JBNDKSJX9X0eagCxyg961m75S4kQ';

  public supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(this.url, this.key);
  }

}
